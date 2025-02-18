import { GetLists } from "@/actions/listActions";
import { ListClientPage } from "./_components/ListClientPage";

const List = async () => {
	const lists = await GetLists();

	return (
		<div className="w-full h-screen flex flex-row">
			<ListClientPage lists={lists || []} />
		</div>
	);
};

export default List;
