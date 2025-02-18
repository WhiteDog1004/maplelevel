"use server";

import { createServerSupabaseClient } from "@/supabase/server";

const handleError = (error) => {
	if (error) {
		throw error;
	}
};

export const GetLists = async () => {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase
		.from("recommend-list")
		.select("*")
		.order("like", { ascending: false });

	handleError(error);

	return data;
};
