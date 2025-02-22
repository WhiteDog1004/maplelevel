import { GetLists } from "@/actions/listActions";
import { SITE_TITLE } from "@/utils/string";
import { Metadata } from "next";
import { ListClientPage } from "./_components/ListClientPage";

export const metadata: Metadata = {
	title: `${SITE_TITLE} - 사냥터 목록`,
	description: "maple-level",
};

const List = async () => {
	const lists = await GetLists();

	return (
		<div className="w-full h-screen flex flex-row">
			<ListClientPage lists={lists || []} />
		</div>
	);
};

export default List;
