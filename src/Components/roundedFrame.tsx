import Roact from "@rbxts/roact";

interface RoundedFrameProps extends Partial<Roact.JsxObject<ImageLabel>> {
	/**
	 * Number between 0 and 0.5. Anything above 0.5 has no difference
	 */
	SliceScale: number;
}
export default class RoundedFrame extends Roact.PureComponent<RoundedFrameProps> {
	render() {
		return (
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://2600845734"
				ScaleType={Enum.ScaleType.Slice}
				SliceCenter={new Rect(64, 64, 64, 64)}
				{...this.props}
			>
				{this.props[Roact.Children]}
			</imagelabel>
		);
	}
}
