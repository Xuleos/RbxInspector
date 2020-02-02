import Roact from "@rbxts/roact";
import List from "./list";
import Card from "./card";
export default class App extends Roact.PureComponent<{}> {
	render(): Roact.Element {
		const theme = settings().Studio.Theme;

		return (
			<frame
				BackgroundColor3={theme.GetColor(Enum.StudioStyleGuideColor.MainBackground)}
				BorderColor3={theme.GetColor(Enum.StudioStyleGuideColor.Border)}
				BorderSizePixel={1}
				Size={new UDim2(1, 0, 1, 0)}
				Visible={true}
			>
				<List>
					<Card />
					<Card />
					<Card />
				</List>
			</frame>
		);
	}
}
