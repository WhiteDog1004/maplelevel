import { Dispatch, SetStateAction } from "react";

export interface RecommendMapProps {
	recommendMap: {
		minimap: string;
		code: number;
		label: string;
	};
	setRecommendMap: Dispatch<
		SetStateAction<RecommendMapProps["recommendMap"]>
	>;
}

export type FormMethodsTypes = {
	caption?: string | undefined;
	minLevel: number;
	maxLevel: number;
	type: string;
};
