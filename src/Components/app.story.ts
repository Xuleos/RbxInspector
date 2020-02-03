import Roact from "@rbxts/roact";
import app from "./app";

/**
 * Remember when hoarcekatting you gotta edit RuntimeLib
 * so it doesn't yield for game to load
 * turn the invalid module access error to warning
 **/

export = (target: GuiObject) => {
	const element = Roact.createElement(app, {});

	const mount = Roact.mount(element, target, "app");

	return () => {
		Roact.unmount(mount);
	};
};
