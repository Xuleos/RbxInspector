import Roact from "@rbxts/roact";
import List from "./list";
import PropertyName from "./PropertyTypes/propertyName";

interface PropertiesProps {
	TitlePadding: Vector2;
	CardHeight: number;
}

export default class Properties extends Roact.PureComponent<PropertiesProps> {
	render() {
		const windowHeight = this.props.CardHeight - this.props.TitlePadding.Y;

		const ROWSNUM = 3;

		const rows: Array<Roact.Element> = [];

		for (let i = 0; i < ROWSNUM; i++) {
			rows.push(
				<frame BackgroundTransparency={1}>
					<PropertyName Height={windowHeight / ROWSNUM} />
					<frame Size={new UDim2(1, 0, 0, windowHeight / ROWSNUM)}></frame>
				</frame>,
			);
		}

		return (
			<frame
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, this.props.TitlePadding.X, 0, this.props.TitlePadding.Y)}
				Size={new UDim2(1, 0, 0, windowHeight)}
				BackgroundTransparency={1}
			>
				<uitablelayout
					FillDirection={Enum.FillDirection.Vertical}
					HorizontalAlignment={Enum.HorizontalAlignment.Left}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				{rows}
			</frame>
		);
	}
}
