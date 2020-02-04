import Roact from "@rbxts/roact";
import RoundedFrame from "../roundedFrame";

interface StringTypeProps {
	Height: number;
}
export default class StringType extends Roact.PureComponent<StringTypeProps> {
	render() {
		return <RoundedFrame SliceScale={0.5} Size={new UDim2(0.7, 0, 0, this.props.Height)}></RoundedFrame>;
	}
}
