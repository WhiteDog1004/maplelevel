import { RecommendMapProps } from "@/types/add";
import { useState } from "react";
import { SelectInformation } from "../SelectInformation";
import { SelectMap } from "../SelectMap";

export const SelectCard = () => {
	const [recommendMap, setRecommendMap] = useState<
		RecommendMapProps["recommendMap"]
	>({
		minimap: "",
		code: 0,
		label: "",
	});
	return (
		<div className="flex flex-col md:flex-row gap-4 w-full justify-between p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
			<div className="flex-1">
				<SelectMap
					recommendMap={recommendMap}
					setRecommendMap={setRecommendMap}
				/>
			</div>
			<div className="flex-1">
				<SelectInformation recommendMap={recommendMap} />
			</div>
		</div>
	);
};
