"use client";

import { Typography } from "@mui/material";
import { EmptyCard } from "../EmptyCard";
import { SelectCard } from "../SelectCard";

export const AddClientPage = () => {
	return (
		<div className="w-full flex flex-col gap-6 items-center p-10 max-w-3xl">
			<div className="flex flex-col gap-1">
				<Typography variant="body2" color="textSecondary">
					당신이 걸어오셨던 여정을 공유해 보세요
				</Typography>
				<Typography variant="h3">사냥터 추천</Typography>
			</div>
			<SelectCard />
			<EmptyCard />
		</div>
	);
};
