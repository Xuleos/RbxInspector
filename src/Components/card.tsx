import Roact from "@rbxts/roact";

export default class Card extends Roact.PureComponent<{}> {
	render() {
		return (
			<frame ZIndex={2} Size={new UDim2(1, 0, 0, 200)} BackgroundTransparency={1}>
				<textlabel
					Size={new UDim2(0.6, 0, 0, 25)}
					Position={new UDim2(0, 5, 0, 0)}
					BorderSizePixel={0}
					TextScaled={true}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundTransparency={1}
					TextColor3={Color3.fromRGB(222, 222, 222)}
				/>
			</frame>
		);
	}
}
