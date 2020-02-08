import { HttpService } from "@rbxts/services";
import t from "@rbxts/t";
export interface APIDump {
	Classes: Array<{}>;
}

const APIDumpInterface = t.interface({
	Classes: t.table,
});

export function checkAPIDump(decodedAPIDump: unknown): decodedAPIDump is APIDump {
	return APIDumpInterface(decodedAPIDump);
}

export async function fetchAPIDump(): Promise<APIDump> {
	const rawAPIDump = HttpService.GetAsync(
		"https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Tracker/roblox/API-Dump.json",
	);

	const decoded = HttpService.JSONDecode(rawAPIDump);

	//! Runtime type checking might be too slow here
	if (checkAPIDump(decoded)) {
		return decoded;
	} else {
		error("APIDump failed quick check");
	}
}
