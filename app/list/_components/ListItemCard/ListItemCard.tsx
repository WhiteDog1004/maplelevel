import { Database } from "@/types_db";
import { getLabelByJobs } from "@/utils/jobs";
import { getTextByCode } from "@/utils/mapCode";
import { EXCHANGE_TYPE, ExchangeTypes } from "@/utils/recommendType";
import { Badge, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface ListItemCardProps {
	data: Database["public"]["Tables"]["recommend-list"]["Row"];
}

export const ListItemCard = ({ data }: ListItemCardProps) => {
	const highestMap = data.map.reduce((max, current) => {
		return current.level.min > max.level.min ? current : max;
	});

	const lowestMap = data.map.reduce((min, current) => {
		return current.level.min < min.level.min ? current : min;
	});

	const { data: minimap } = useQuery({
		queryKey: ["minimap"],
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
			color="warning"
			badgeContent={
				<div className="flex justify-center items-center gap-1">
					<i className="fas fa-thumbs-up" />
					<Typography variant="caption">
						{data.like || "0"}
					</Typography>
				</div>
			}
		>
			<div className="border flex flex-col p-8 rounded-sm relative">
				{minimap && (
					<Image
						unoptimized
						sizes="140px"
						width={140}
						height={140}
						src={minimap.url}
						alt="minimap"
					/>
				)}
				<div className="flex flex-col gap-2">
					<div className="flex flex-col">
						<Typography>
							{getLabelByJobs(data.job)?.label}
						</Typography>
						<Typography>
							{EXCHANGE_TYPE[data.type as ExchangeTypes]}위주
						</Typography>
					</div>

					<div className="flex flex-col">
						<Typography>
							레벨 :{" "}
							{Math.min(
								...data.map.map((item) => item.level.min)
							)}{" "}
							~{" "}
							{Math.max(
								...data.map.map((item) => item.level.max)
							)}
						</Typography>
						<Typography>
							{getTextByCode(Number(lowestMap.map))?.kor} ~{" "}
							{getTextByCode(Number(highestMap.map))?.kor}
						</Typography>
					</div>
				</div>
			</div>
		</Badge>
	);
};
