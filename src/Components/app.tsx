import Roact from "@rbxts/roact";
import { Dumpster } from "@rbxts/dumpster";
import List from "./list";
import PropertyCard from "./BuiltInCards/propertyCard";
import { getAPIDump } from "APIDump/RobloxAPI";

const Selection = game.GetService("Selection");

interface AppProps {
	widget: DockWidgetPluginGui;
}

interface AppState {
	Instance: Instance | undefined;
}

export default class App extends Roact.PureComponent<AppProps, AppState> {
	dumpster: Dumpster;
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
	}

	willUnmount() {
		this.dumpster.burn();
	}
}
