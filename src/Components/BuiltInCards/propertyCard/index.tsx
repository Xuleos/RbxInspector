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
		const rowNum = 15;
		const rowSize = 30;

		const PADDING = new Vector2(8, 11);
		const TEXTHEIGHT = 20;
		const TextSize = 14;
		const HEIGHT = rowNum * rowSize + rowNum * 5 + TEXTHEIGHT + PADDING.Y;
		const BORDER_SIZE = 2;

		//const TitlePadding = PADDING.add(new Vector2(0, 20)).add(new Vector2(0, 20));
		return (
			<CardBase
				Height={HEIGHT}
				padding={PADDING}
				borderSize={BORDER_SIZE}
				textHeight={TEXTHEIGHT}
				textSize={TextSize}
			>
				<PropertiesList
					TitlePadding={toScale(PADDING, this.props.widget)}
					CardHeight={HEIGHT - BORDER_SIZE}
					RowSize={rowSize}
					Rows={rowNum}
					Offset={TextSize - BORDER_SIZE}
				></PropertiesList>
			</CardBase>
		);
	}
};
