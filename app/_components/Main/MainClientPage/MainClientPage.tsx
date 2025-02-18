"use client";

import { MainSNB } from "../MainSNB";
import { UserInfomation } from "../UserInfomation";

export const MainClientPage = () => {
	return (
		<div className="flex flex-row relative gap-4 justify-center">
			<MainSNB />
			<UserInfomation />
		</div>
	);
};
