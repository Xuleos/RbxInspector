import Roact from "@rbxts/roact";
import PropertiesList from "./propertiesList";

const HEIGHT = 200;
const BORDER_SIZE = 2;

export default class Card extends Roact.PureComponent<{}> {
	render() {
		const paddingX = 8;
		const paddingY = 11;
		const textHeight = 20;
		return (
			<frame ZIndex={2} Size={new UDim2(1, 0, 0, HEIGHT)} BackgroundTransparency={1}>
				<textlabel
					Size={new UDim2(0.35, 0, 0, textHeight)}
					Position={new UDim2(0, paddingX, 0, paddingY)}
					BorderSizePixel={0}
					TextScaled={true}
					Text={"BEHAVIOR"}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundTransparency={1}
					TextColor3={Color3.fromRGB(222, 222, 222)}
					Font={Enum.Font.GothamSemibold}
				>
					<uitextsizeconstraint MaxTextSize={14} MinTextSize={8} />
				</textlabel>

				<PropertiesList
					TitlePadding={new Vector2(paddingX, paddingY + textHeight)}
					CardHeight={HEIGHT - BORDER_SIZE}
				></PropertiesList>

				<frame
					Position={new UDim2(0, 0, 0, HEIGHT - BORDER_SIZE)}
					Size={new UDim2(1, 0, 0, BORDER_SIZE)}
					BackgroundColor3={Color3.fromRGB(32, 32, 32)}
					BorderSizePixel={0}
				/>
			</frame>
		);
	}
}
