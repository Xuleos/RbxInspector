import Roact from "@rbxts/roact";
import App from "./app";

class FakePlugin {
	Settings: unknown = undefined;

	getSettings() {
		return this.Settings;
	}

	setSettings<T>(newSettings: T) {
		this.Settings = newSettings;
	}
}

export = (target: GuiObject) => {
	const element = (
		<App
			widget={target.FindFirstAncestorOfClass("DockWidgetPluginGui")!}
			plugin={(FakePlugin as unknown) as Plugin}
		></App>
	);

	const mount = Roact.mount(element, target, "app");

	return () => {
		Roact.unmount(mount);
	};
};
