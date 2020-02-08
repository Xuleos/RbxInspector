import Roact from "@rbxts/roact";
import { Dumpster } from "@rbxts/dumpster";
import List from "./list";
import PropertyCard from "./BuiltInCards/propertyCard";
import { fetchAPIDump, APIDump } from "APIDump/RobloxAPI";

const Selection = game.GetService("Selection");

const CACHE_DURATION = 7 * 86400;

interface Settings {
	lastCacheTime: number;
	APIDump: APIDump;
}

//TODO: better type safety here
function isPluginSettings(pluginSettings: unknown): pluginSettings is Settings {
	return typeOf(pluginSettings) === "table";
}

interface AppProps {
	widget: DockWidgetPluginGui;
	plugin: Plugin;
}

interface AppState {
	Instance: Instance | undefined;
}

export default class App extends Roact.PureComponent<AppProps, AppState> {
	dumpster: Dumpster;
	APIDump?: APIDump;
	constructor(p: AppProps) {
		super(p);
		this.dumpster = new Dumpster();
	}
	render(): Roact.Element {
		const theme = settings().Studio.Theme;

		const cards = this.state.Instance ? [<PropertyCard widget={this.props.widget} />] : [];

		return (
			<frame
				BackgroundColor3={theme.GetColor(Enum.StudioStyleGuideColor.MainBackground)}
				BorderColor3={theme.GetColor(Enum.StudioStyleGuideColor.Border)}
				BorderSizePixel={1}
				Size={new UDim2(1, 0, 1, 0)}
				Visible={true}
			>
				<List>{cards}</List>
			</frame>
		);
	}

	didMount() {
		this.setState({ Instance: Selection.Get()[0] });

		this.dumpster.dump(
			Selection.SelectionChanged.Connect(() => {
				print("Selection changed");
				this.setState({ Instance: Selection.Get()[0] });
			}),
		);

		const pluginSettings = this.props.plugin.GetSetting("RbxInspector");

		print("Getting API Dump");

		if (pluginSettings === undefined) {
			//Case: there is no plugin settings

			fetchAPIDump()
				.then(apiDump => {
					const settings: Settings = {
						lastCacheTime: tick(),
						APIDump: apiDump[0],
					};
					this.props.plugin.SetSetting("RbxInspector", settings);
				})
				.catch((err: string) => {
					throw `Failed to get API dump: ${err}`;
				});
		} else if (isPluginSettings(pluginSettings)) {
			//Case: there is a plugin settings and it is in the correct format

			if (tick() - pluginSettings.lastCacheTime >= CACHE_DURATION) {
				const settings = Object.deepCopy(pluginSettings);

				fetchAPIDump().then(apiDump => {
					settings.APIDump = apiDump[0];
					settings.lastCacheTime = tick();

					this.props.plugin.SetSetting("RbxInspector", settings);
				});
			}
		} else {
			//Case: there is a plugin settings but it is in the wrong format
			//TODO: Handle wrongly formatted plugin settings somehow

			error("Plugin settings is incorrectly formatted. Please forward this to the developer @Xuleos_");
		}
	}

	willUnmount() {
		this.dumpster.burn();
	}
}
