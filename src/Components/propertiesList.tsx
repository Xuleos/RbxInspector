import Roact from "@rbxts/roact";
import PropertyName from "./PropertyTypes/propertyName";
import StringType from "./PropertyTypes/stringType";

interface PropertiesProps {
	TitlePadding: Vector2;
	CardHeight: number;
	RowSize: number;
	Rows: number;
	RowPadding: number;
	Offset: number;
	Height: number;
}

export default class Properties extends Roact.PureComponent<PropertiesProps> {
	render() {
		const ROWSNUM = this.props.Rows;

		const rows: Array<Roact.Element> = [];

		const ROW_LIST_PADDING = 60;

		for (let i = 0; i < ROWSNUM; i++) {
			rows.push(
				<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 0, this.props.RowSize)}>
					<uilistlayout
						FillDirection={Enum.FillDirection.Horizontal}
						Padding={new UDim(0, ROW_LIST_PADDING)}
					/>
					<PropertyName Height={this.props.RowSize} RowListPadding={ROW_LIST_PADDING} />
					<StringType Height={this.props.RowSize} RowListPadding={ROW_LIST_PADDING} />
				</frame>,
			);
		}

		return (
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(0.5, this.props.TitlePadding.X, 0.5, this.props.Offset)}
				Size={new UDim2(1, 0, 0, this.props.Height)}
				BackgroundTransparency={1}
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Vertical}
					HorizontalAlignment={Enum.HorizontalAlignment.Left}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					Padding={new UDim(0, this.props.RowPadding)}
				/>
				{rows}
			</frame>
		);
	}
}
