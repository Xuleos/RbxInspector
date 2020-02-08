import Roact from "@rbxts/roact";

interface CardBaseProps {
	Height: number;
	borderSize: number;
	padding: Vector2;
	textHeight: number;
	textSize: number;
}
export default class CardBase extends Roact.PureComponent<CardBaseProps> {
	render() {
		const paddingX = this.props.padding.X;
		const paddingY = this.props.padding.Y;
		return (
			<frame ZIndex={2} Size={new UDim2(1, 0, 0, this.props.Height)} BackgroundTransparency={1}>
				<textlabel
					Size={new UDim2(0.35, 0, 0, this.props.textHeight)}
					Position={new UDim2(0, paddingX, 0, paddingY)}
					BorderSizePixel={0}
					TextSize={this.props.textSize}
					Text={"BEHAVIOR"}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundTransparency={1}
					TextColor3={Color3.fromRGB(222, 222, 222)}
					Font={Enum.Font.GothamSemibold}
				/>

				{this.props[Roact.Children]}

				<frame
					Position={new UDim2(0, 0, 0, this.props.Height - this.props.borderSize)}
					Size={new UDim2(1, 0, 0, this.props.borderSize)}
					BackgroundColor3={Color3.fromRGB(32, 32, 32)}
					BorderSizePixel={0}
				/>
			</frame>
		);
	}
}
