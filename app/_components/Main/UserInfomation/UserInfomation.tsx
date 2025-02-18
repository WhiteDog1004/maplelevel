import { JOBS } from "@/utils/jobs";
import { yupResolver } from "@hookform/resolvers/yup";
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

	const onSubmit = (value) => {
		console.log(value);
	};

	return (
		<div className="border px-20 py-12 rounded-lg flex flex-col items-center gap-8">
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
									{job.label}
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
						variant="outlined"
						{...register("level")}
						error={!!errors.level?.message}
						placeholder="레벨을 입력해 주세요"
						helperText={errors.level?.message}
					/>
					<div className="flex flex-col gap-2">
						<Typography variant="body2">
							원하는 사냥 방식 선택
						</Typography>
						<Controller
							name="type"
							control={control}
							render={({ field }) => (
								<ToggleButtonGroup
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
					</div>
					<Button color="inherit" variant="outlined" type="submit">
						검색
					</Button>
				</FormControl>
			</form>
		</div>
	);
};
