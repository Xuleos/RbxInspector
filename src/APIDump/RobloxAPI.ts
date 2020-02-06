import { HttpService } from "@rbxts/services";

const CACHE_DURATION = 7 * 86400;

interface APIDump {
	Classes: Array<{}>;
}

interface Settings {
	lastCacheTime: number;
	APIDump: APIDump;
}

//TODO: better type safety here
function isPluginSettings(cacheSetting: unknown): cacheSetting is Settings {
	return typeOf(cacheSetting) === "table";
}

export async function fetchAPIDump(): Promise<APIDump> {
	const rawAPIDump = HttpService.GetAsync(
		"https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Tracker/roblox/API-Dump.json",
	);

	//Really weird @rbxts/types auto generated bug
	return HttpService.JSONDecode(rawAPIDump) as APIDump;
}

export async function getAPIDump(HoarceKat?: boolean): Promise<APIDump> {
	//If HoarceKat is enabled, we should avoid using plugin global

	const pluginSettings = plugin.GetSetting("RbxInspector");

	if (isPluginSettings(pluginSettings)) {
		if (tick() - pluginSettings.lastCacheTime >= CACHE_DURATION) {
			pluginSettings.lastCacheTime = tick();

			const rawAPIDump = await fetchAPIDump();

			pluginSettings.APIDump = rawAPIDump;

			plugin.SetSetting("RbxInspector", pluginSettings);

			return rawAPIDump;
		} else {
			return pluginSettings.APIDump;
		}
	} else {
		error(
			"RbxInspector plugin settings are in an incorrect format. If you see this, please forward it to the developer",
		);
	}
}
