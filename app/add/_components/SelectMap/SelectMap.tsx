import { MAP_CODE } from "@/utils/mapCode";
import { AddCircle } from "@mui/icons-material";
import {
	Autocomplete,
	Modal,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";

export const SelectMap = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectMap, setSelectMap] = useState("");
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const handleModal = () => {
		if (isOpen) return setIsOpen(false);
		return setIsOpen(true);
	};

	const { data: minimap } = useQuery({
		queryKey: ["minimap", selectMap],
		queryFn: async () => {
			const response = await fetch(
				`https://maplestory.io/api/gms/62/map/${
					MAP_CODE.filter((map) => map.kor.includes(selectMap))[0]
						.code
				}/minimap`
			);

			return response;
		},
		enabled: !!selectMap,
	});

	const handleInputChange = (
		e: SyntheticEvent<Element, Event>,
		value: string
	) => {
		setSearch(value);
	};

	useEffect(() => {
		if (search) {
			const queryArray = search.split("");

			// 자동완성 항목을 필터링하는 로직
			const filteredSuggestions = MAP_CODE.filter((item) => {
				const itemLabel =
					item.kor.split(":")[1]?.trimStart() || item.kor;
				const itemArray = itemLabel.split("");
				return queryArray.every((char) => itemArray.includes(char));
			});

			setSuggestions(filteredSuggestions.map((item) => item.kor));
		} else {
			setSuggestions([]);
		}
	}, [search]);

	return (
		<>
			<div
				className="w-full flex flex-col justify-center items-center gap-2 cursor-pointer dark:bg-zinc-900 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-950 rounded-lg px-6 py-4"
				onClick={handleModal}
			>
				<AddCircle className="text-zinc-600" />
				<Typography variant="caption" color="textDisabled">
					사냥터 목록
				</Typography>
			</div>
			<Modal open={isOpen} onClose={handleModal}>
				<div className="bg-zinc-600 rounded-lg p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<Stack width={240}>
						<Autocomplete
							freeSolo
							onInputChange={handleInputChange}
							filterOptions={(list) => {
								return list.filter((item) => {
									return item;
								});
							}}
							renderInput={(params) => (
								<TextField
									enterKeyHint="search"
									{...params}
									label="사냥터"
									slotProps={{
										input: {
											...params.InputProps,
										},
									}}
								/>
							)}
							onChange={(e, value) => {
								setSelectMap(
									value?.split(":")[1]?.trimStart() || ""
								);
							}}
							groupBy={(option) => option.split(":")[0].trimEnd()}
							getOptionLabel={(option) =>
								option.split(":")[1]?.trimStart() || option
							}
							options={suggestions}
						/>
					</Stack>
					{minimap && (
						<div className="w-full h-40 relative flex justify-center">
							<Image
								fill
								objectFit="contain"
								unoptimized
								alt={"select_map"}
								src={minimap.url}
							/>
						</div>
					)}
				</div>
			</Modal>
		</>
	);
};
