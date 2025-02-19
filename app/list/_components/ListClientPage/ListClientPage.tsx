"use client";

import { Database } from "@/types_db";
import { ListItemCard } from "../ListItemCard";

interface ListClientPageProps {
	lists: Database["public"]["Tables"]["recommend-list"]["Row"][];
}

export const ListClientPage = ({ lists }: ListClientPageProps) => {
	console.log(lists);

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center w-full h-max gap-8 p-16">
			{lists.map((list) => (
				<ListItemCard key={list.uuid} data={list} />
			))}
		</div>
	);
};
