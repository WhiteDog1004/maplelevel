export const formatNumber = (value: string) => {
  const number = value.replace(/,/g, '');
  if (!number) return '';
  return Number(number).toLocaleString();
};

export const formatToKoreanUnits = (input: string, isFiveMinute?: boolean): string => {
  // 1. 쉼표 제거하고 숫자로 변환
  const num = isFiveMinute ? Number(input.replace(/,/g, '')) * 12 : Number(input.replace(/,/g, ''));
  if (Number.isNaN(num)) return '';

  // 2. 억, 만, 천 계산
  const 억 = Math.floor(num / 100000000);
  const 만 = Math.floor((num % 100000000) / 10000);
  const 천 = Math.floor((num % 10000) / 1000);

  // 3. 천을 만에 포함시키기
  let result = '';
  if (억 > 0) result += `${억}억 `;
  if (만 > 0) result += `${만}만`;
  if (천 > 0 && 만 === 0) result += `${천}천`; // 만이 없을 경우만 천 단위 사용

  return result.trim();
};
