import Roact from "@rbxts/roact";

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
				{this.props[Roact.Children]}
			</frame>
		);
	}
}
