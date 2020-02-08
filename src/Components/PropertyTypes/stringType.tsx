import Roact from "@rbxts/roact";
import RoundedFrame from "../roundedFrame";

interface StringTypeProps {
	Height: number;
	RowListPadding: number;
}
export default class StringType extends Roact.PureComponent<StringTypeProps> {
	render() {
		return (
			<RoundedFrame
				SliceScale={0.5}
				Size={new UDim2(1, -50 - this.props.RowListPadding - 10, 0, this.props.Height)}
			></RoundedFrame>
		);
	}
}
