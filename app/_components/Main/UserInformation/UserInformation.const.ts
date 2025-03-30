import * as yup from "yup";

export const infoSchema = yup.object().shape({
	type: yup.string().required("최소 하나는 선택해야 합니다"),
	job: yup.string().required("직업을 선택해 주세요"),
	level: yup
		.number()
		.min(1, "최소 레벨은 1 이상이어야 합니다")
		.max(200, "최대 레벨은 200 이하여야 합니다")
		.transform((value) => {
			if (value === "") return undefined;
			const num = Number(value);
			return isNaN(num) ? undefined : num;
		})
		.required("레벨을 입력해 주세요"),
});
