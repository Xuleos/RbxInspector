import Roact from "@rbxts/roact";
import * as Runner from "runner";

import CardBase from "Components/cardBase";
import PropertiesList from "Components/propertiesList";

export = class PropertyCard extends Roact.PureComponent<Runner.CardProps> {
	constructor(p: Runner.CardProps) {
		super(p);
	}

	render() {
		const HEIGHT = 300;
		const PADDING = new Vector2(8, 11);
		const BORDER_SIZE = 2;
		const TEXTHEIGHT = 20;
		return (
			<CardBase Height={HEIGHT} padding={PADDING} borderSize={BORDER_SIZE} textHeight={TEXTHEIGHT}>
				<PropertiesList
					TitlePadding={PADDING.add(new Vector2(0, 20))}
					CardHeight={HEIGHT - BORDER_SIZE}
				></PropertiesList>
			</CardBase>
		);
	}
};
