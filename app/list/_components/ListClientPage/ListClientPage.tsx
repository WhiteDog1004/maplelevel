"use client";

import { Database } from "@/types_db";
import { ListItemCard } from "../ListItemCard";

interface ListClientPageProps {
	lists: Database["public"]["Tables"]["recommend-list"]["Row"][];
}

export const ListClientPage = ({ lists }: ListClientPageProps) => {
	console.log(lists);

	return (
		<div className="p-20">
			{lists.map((list) => (
				<ListItemCard key={list.uuid} data={list} />
			))}
		</div>
	);
};
