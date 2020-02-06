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
		const ROW_NUM = 15;
		const ROW_SIZE = 30;
		const ROW_PADDING = 5;

		const PADDING = new Vector2(8, 11);
		const TEXT_HEIGHT = 20;
		const TEXT_SIZE = 14;
		const BORDER_SIZE = 2;

		const listHeight = ROW_NUM * ROW_SIZE + ROW_NUM * ROW_PADDING;
		const cardHeight = listHeight + TEXT_HEIGHT + PADDING.Y;

		return (
			<CardBase
				Height={cardHeight}
				padding={PADDING}
				borderSize={BORDER_SIZE}
				textHeight={TEXT_HEIGHT}
				textSize={TEXT_SIZE}
			>
				<PropertiesList
					TitlePadding={PADDING}
					CardHeight={cardHeight - BORDER_SIZE}
					RowSize={ROW_SIZE}
					Rows={ROW_NUM}
					RowPadding={ROW_PADDING}
					Offset={TEXT_SIZE - BORDER_SIZE}
					Height={listHeight}
				></PropertiesList>
			</CardBase>
		);
	}
};
