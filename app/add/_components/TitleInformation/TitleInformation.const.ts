import * as yup from "yup";

export const titleInfoSchema = yup.object().shape({
	title: yup.string(),
	job: yup.string().required("직업을 선택해 주세요"),
	type: yup.string().required("최소 하나는 선택해야 합니다"),
});
