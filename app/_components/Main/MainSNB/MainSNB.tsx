import { Typography } from "@mui/material";
import Link from "next/link";
import { lists } from "./MainSNB.const";

export const MainSNB = () => {
	return (
		<div className="absolute right-full">
			<div className="p-8 flex flex-col justify-end border w-max rounded-lg mr-2 gap-6">
				<Typography variant="h4">레벨지지</Typography>
				<div className="flex flex-col gap-4 items-end">
					{lists.map((list) => (
						<Link
							key={list.href}
							href={list.href}
							className="hover:text-blue-400 transition"
						>
							<div className="flex flex-row">
								<Typography variant="body1">
									{list.label}
								</Typography>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
