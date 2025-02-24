import { SelectMap } from "../SelectMap";

export const SelectCard = () => {
	return (
		<div className="flex flex-row gap-4 w-full justify-between px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
			<div className="flex-1">
				<SelectMap />
			</div>
			<div className="flex-1">right</div>
		</div>
	);
};
