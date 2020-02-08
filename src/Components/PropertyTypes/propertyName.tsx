import Roact from "@rbxts/roact";

interface PropertyNameProps {
	Height: number;
	RowListPadding: number;
}
export default class PropertyName extends Roact.PureComponent<PropertyNameProps> {
	render() {
		return (
			<textlabel
				Size={new UDim2(0, 50, 0, this.props.Height)}
				Text="Property"
				TextSize={9}
				TextColor3={Color3.fromRGB(185, 185, 185)}
				BackgroundTransparency={1}
				TextXAlignment={Enum.TextXAlignment.Left}
			></textlabel>
		);
	}
}
