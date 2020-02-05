import Roact from "@rbxts/roact";
import App from "./app";

/**
 * Remember when hoarcekatting you gotta edit RuntimeLib
 * so it doesn't yield for game to load
 * turn the invalid module access error to warning
 **/

export = (target: GuiObject) => {
	const element = <App widget={target.FindFirstAncestorOfClass("DockWidgetPluginGui")!}></App>;

	const mount = Roact.mount(element, target, "app");

	return () => {
		Roact.unmount(mount);
	};
};
