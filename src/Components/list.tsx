import Roact from "@rbxts/roact";

export default class List extends Roact.PureComponent<{}, {}> {
	render(): Roact.Element {
		return (
			<Roact.Fragment>
				<uilistlayout HorizontalAlignment={Enum.HorizontalAlignment.Center} />
				{this.props[Roact.Children]}
			</Roact.Fragment>
		);
	}
}
