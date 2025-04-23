import { getNotice } from '@/actions/noticeActions';
import { useQuery } from '@tanstack/react-query';

interface NoticeTableType {
  id: number;
  uuid: string;
  writer: {
    uuid: string;
    avatar_url: string;
    nickname: string;
  };
  created_at: string;
  type: string;
  isTop: boolean;
  title: string;
  content: string;
  updated_at?: string;
}

export const useGetNotice = () => {
  const queryResult = useQuery<NoticeTableType[]>({
    queryKey: ['notice'],
    queryFn: async () => {
      const result = await getNotice();
      if (!result || !Array.isArray(result) || result.length === 0) {
        throw new Error('Invalid data');
      }
      return result as NoticeTableType[];
    },
  });

  return queryResult;
};
