import { getClassImages, JOBS } from "@/utils/jobs";
import { yupResolver } from "@hookform/resolvers/yup";
import { Add } from "@mui/icons-material";
import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { infoSchema } from "./UserInformation.const";

export const UserInfomation = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(infoSchema),
	});
	const [selectValue, setSelectValue] = useState("");

	const onSubmit = (value: unknown) => {
		console.log(value);
	};

	return (
		<div className="px-14 py-12 rounded-lg flex flex-col items-center gap-8 dark:bg-zinc-800 bg-zinc-100 border-zinc-200 border-2 dark:border-0">
			<Typography variant="h6">캐릭터 정보 입력</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl className="flex flex-col gap-4">
					<FormControl error={!!errors.job?.message}>
						<InputLabel>직업</InputLabel>
						<Select
							label="직업"
							value={selectValue}
							{...register("job")}
							onChange={(e) => setSelectValue(e.target.value)}
						>
							{JOBS.map((job) => (
								<MenuItem key={job.id} value={job.name}>
									<div className="flex items-center gap-2">
										<Image
											width={20}
											height={20}
											unoptimized
											src={`/images/class/${getClassImages(
												job.id
											)}.webp`}
											alt={"class"}
										/>
										{job.label}
									</div>
								</MenuItem>
							))}
						</Select>
						{errors.job?.message && (
							<FormHelperText>
								{errors.job.message}
							</FormHelperText>
						)}
					</FormControl>
					<TextField
						label="레벨"
						{...register("level")}
						error={!!errors.level?.message}
						placeholder="레벨을 입력해 주세요"
						helperText={errors.level?.message}
					/>
					<div className="w-full text-center">
						<Add />
					</div>
					<div className="flex flex-col gap-2">
						<Typography variant="body2" color="primary">
							사냥 스타일
						</Typography>
						<Controller
							name="type"
							control={control}
							rules={{ required: "타입을 선택해주세요." }}
							render={({ field }) => (
								<ToggleButtonGroup
									className="bg-white dark:bg-transparent"
									fullWidth
									exclusive
									aria-label="type"
									value={field.value}
									onChange={(_, value) => {
										if (!value) return;
										field.onChange(value);
									}}
								>
									<ToggleButton value="all">
										모두
									</ToggleButton>
									<ToggleButton value="meso">
										돈벌이
									</ToggleButton>
									<ToggleButton value="exp">
										경험치
									</ToggleButton>
								</ToggleButtonGroup>
							)}
						/>
						{errors.type && (
							<Typography variant="caption" color="error">
								최소 하나는 선택해야 합니다.
							</Typography>
						)}
					</div>
					<Button color="inherit" variant="outlined" type="submit">
						검색
					</Button>
				</FormControl>
			</form>
		</div>
	);
};
