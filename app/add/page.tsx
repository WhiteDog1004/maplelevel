import { SITE_TITLE } from "@/utils/string";
import { Metadata } from "next";
import { AddClientPage } from "./_components/AddClientPage";

export const metadata: Metadata = {
	title: `${SITE_TITLE} - 사냥터 추천`,
	description: "maple-level",
};

const LevelAdd = async () => {
	return (
		<div className="w-full min-h-screen h-full flex flex-row justify-center items-start">
			<AddClientPage />
		</div>
	);
};

export default LevelAdd;
