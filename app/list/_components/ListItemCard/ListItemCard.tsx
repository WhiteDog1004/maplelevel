import { Database } from "@/types_db";
import { getLabelByJobs } from "@/utils/jobs";
import { getTextByCode } from "@/utils/mapCode";
import { EXCHANGE_TYPE, ExchangeTypes } from "@/utils/recommendType";
import { Avatar, Badge, Chip, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getBadgeType } from "./ListItemCard.const";

interface ListItemCardProps {
	data: Database["public"]["Tables"]["recommend-list"]["Row"];
}

export const ListItemCard = ({ data }: ListItemCardProps) => {
	// const highestMap = data.map.reduce((max, current) => {
	// 	return current.level.min > max.level.min ? current : max;
	// });

	const lowestMap = data.map.reduce((min, current) => {
		return current.level.min < min.level.min ? current : min;
	});

	const { data: minimap } = useQuery({
		queryKey: ["minimap", data.uuid],
		queryFn: async () => {
			const response = await fetch(
				`https://maplestory.io/api/gms/62/map/${lowestMap.map}/minimap`
			);

			return response;
		},
	});

	return (
		<Badge
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			color={data.like > 5 ? "info" : "warning"}
			className="w-max"
			badgeContent={
				<div className="flex justify-center items-center gap-1 px-1">
					<Typography variant="caption" color="textPrimary">
						<i className="fas fa-thumbs-up" />
					</Typography>
					<Typography variant="body2" color="textPrimary">
						{data.like || "0"}
					</Typography>
				</div>
			}
		>
			<div className="flex flex-col px-8 py-6 gap-4 rounded-lg relative dark:bg-zinc-800 hover:-translate-y-2 transition-transform cursor-pointer">
				<div className="flex gap-4 items-center justify-between">
					<div className="w-28 h-28 relative overflow-hidden object-cover">
						{minimap && (
							<Image
								className="h-full"
								unoptimized
								sizes="140px"
								width={140}
								height={140}
								src={minimap.url}
								alt="minimap"
							/>
						)}
					</div>
					<div className="flex flex-col text-end gap-4 min-w-24">
						<div className="flex flex-col">
							<Typography variant="body2">
								{getLabelByJobs(data.job)?.label}
							</Typography>
							<Typography variant="body2">
								레벨 :{" "}
								{Math.min(
									...data.map.map((item) => item.level.min)
								)}{" "}
								~
								{/* {Math.max(
									...data.map.map((item) => item.level.max)
								)} */}
							</Typography>
						</div>
						<span
							className={`${
								getBadgeType[data.type as ExchangeTypes]
							} justify-center`}
						>
							<Typography variant="body2">
								{EXCHANGE_TYPE[data.type as ExchangeTypes]}
							</Typography>
						</span>
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<div className="flex flex-col">
						<Typography variant="body2">
							{
								getTextByCode(
									Number(lowestMap.map)
								)?.kor?.split(":")[1]
							}{" "}
							~
							{/* {getTextByCode(Number(highestMap.map))?.kor} */}
						</Typography>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2">
					<Chip
						color="primary"
						avatar={
							<Avatar alt="avatar" src="/images/mushroom.png" />
						}
						label={
							<Typography variant="caption">
								{data.nickname || "익명의 모험가"}
							</Typography>
						}
						variant="outlined"
					/>
				</div>
			</div>
		</Badge>
	);
};
