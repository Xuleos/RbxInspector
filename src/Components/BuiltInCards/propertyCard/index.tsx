import Roact from "@rbxts/roact";
import * as Runner from "runner";

import { toScale } from "util/scaleUtil";

import CardBase from "Components/cardBase";
import PropertiesList from "Components/propertiesList";

export = class PropertyCard extends Roact.PureComponent<Runner.CardProps> {
	constructor(p: Runner.CardProps) {
		super(p);
	}

	render() {
		const rowNum = 8;
		const rowSize = 30;

		const PADDING = new Vector2(8, 11);
		const HEIGHT = rowNum * rowSize + 31;
		const BORDER_SIZE = 2;
		const TEXTHEIGHT = 20;

		//const TitlePadding = PADDING.add(new Vector2(0, 20)).add(new Vector2(0, 20));
		return (
			<CardBase Height={HEIGHT} padding={PADDING} borderSize={BORDER_SIZE} textHeight={TEXTHEIGHT}>
				<PropertiesList
					TitlePadding={toScale(PADDING, this.props.widget)}
					CardHeight={HEIGHT - BORDER_SIZE}
					rowSize={rowSize}
					rows={rowNum}
				></PropertiesList>
			</CardBase>
		);
	}
};
