import * as yup from 'yup';

export const selectInfoSchema = yup.object().shape({
  caption: yup.string().max(800, '최대 800자까지 입력 가능합니다.'),
  place: yup.number().required('최소 하나는 선택해야 합니다'),
  type: yup.string().required('최소 하나는 선택해야 합니다'),
  minLevel: yup
    .number()
    .min(1, '레벨이 너무 낮아요!')
    .max(200, '최대 레벨 초과')
    .transform((value) => {
      if (value === '') return undefined;
      const num = Number(value);
      return isNaN(num) ? undefined : num;
    })
    .required('레벨을 입력해 주세요'),

  maxLevel: yup
    .number()
    .min(1, '레벨이 너무 낮아요!')
    .max(200, '최대 레벨 초과')
    .transform((value) => {
      if (value === '') return undefined;
      const num = Number(value);
      return isNaN(num) ? undefined : num;
    })
    .required('레벨을 입력해 주세요'),
});
