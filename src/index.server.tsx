/// <reference types="@rbxts/types/plugin" />

import Roact from "@rbxts/roact";
import App from "./Components/app";

const widgetInfo = new DockWidgetPluginGuiInfo(Enum.InitialDockState.Right, false, false, 200, 200, 150, 150);

const widget = plugin.CreateDockWidgetPluginGui("Inspector", widgetInfo);
widget.Title = "Inspector";

const toolbar = plugin.CreateToolbar("Inspector");
const button = toolbar.CreateButton("Inspector", "", "");

const tree = <App widget={widget} />;

let mount: Roact.ComponentInstanceHandle;

button.Click.Connect(() => {
	widget.Enabled = !widget.Enabled;

	if (widget.Enabled === true) {
		mount = Roact.mount(tree, widget, "App");
	} else {
		Roact.unmount(mount);
	}
});

export {};
