import Roact from "@rbxts/roact";
import List from "./list";
import PropertyName from "./PropertyTypes/propertyName";
import StringType from "./PropertyTypes/stringType";

interface PropertiesProps {
	TitlePadding: Vector2;
	CardHeight: number;
	RowSize: number;
	Rows: number;
	Offset: number;
}

export default class Properties extends Roact.PureComponent<PropertiesProps> {
	render() {
		const ROWSNUM = this.props.Rows;

		const rows: Array<Roact.Element> = [];

		for (let i = 0; i < ROWSNUM; i++) {
			rows.push(
				<frame BackgroundTransparency={1}>
					<PropertyName Height={this.props.RowSize} />
					<StringType Height={this.props.RowSize} />
				</frame>,
			);
		}

		return (
			//get 12 by subtracting text size by border size
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(0.5 + this.props.TitlePadding.X, 0, 0.5, this.props.Offset)}
				Size={new UDim2(1, 0, 0, this.props.RowSize * this.props.Rows + this.props.Rows * 5)}
				BackgroundTransparency={1}
			>
				<uitablelayout
					FillDirection={Enum.FillDirection.Vertical}
					HorizontalAlignment={Enum.HorizontalAlignment.Left}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					Padding={new UDim2(0, 0, 0, 5)}
				/>
				{rows}
			</frame>
		);
	}
}
