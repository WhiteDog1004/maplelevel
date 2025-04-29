export const formatNumber = (value: string) => {
  const number = value.replace(/,/g, '');
  if (!number) return '';
  return Number(number).toLocaleString();
};
