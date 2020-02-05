export function toScale(offset: Vector2, widget: DockWidgetPluginGui): Vector2 {
	return offset.div(widget.AbsoluteSize);
}
