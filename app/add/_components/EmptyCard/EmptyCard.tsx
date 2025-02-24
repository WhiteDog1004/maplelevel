import { AddCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const EmptyCard = () => {
	return (
		<div className="flex flex-col gap-2 w-full justify-center items-center bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-900 dark:bg-zinc-800 px-20 py-6 rounded-lg cursor-pointer">
			<AddCircle className="text-zinc-600 hover:text-zinc-800" />
			<Typography variant="caption" color="textDisabled">
				이곳을 눌러 사냥터를 추가해 보세요
			</Typography>
		</div>
	);
};
