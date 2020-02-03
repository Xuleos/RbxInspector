import Roact from "@rbxts/roact";

interface PropertyNameProps {
	Height: number;
}
export default class PropertyName extends Roact.PureComponent<PropertyNameProps> {
	render() {
		return (
			<textlabel
				Size={new UDim2(0, 100, 0, this.props.Height)}
				Text="Property"
				TextScaled={true}
				TextColor3={Color3.fromRGB(185, 185, 185)}
				BackgroundTransparency={1}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uitextsizeconstraint MaxTextSize={9} MinTextSize={9} />
			</textlabel>
		);
	}
}
