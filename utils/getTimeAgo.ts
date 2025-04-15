export const getTimeAgo = (dateString: string | Date): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return '오늘';
  if (diffDays === 1) return '1일 전';
  if (diffDays < 365) return `${diffDays}일 전`;

  const years = Math.floor(diffDays / 365);
  return `${years}년 전`;
};
