import { getLikeCount } from '@/actions/likeActions';
import { useQuery } from '@tanstack/react-query';

interface UseGetLikeProps {
  postUuid: string;
  enabled: boolean;
}

export const useGetLike = ({ postUuid, enabled }: UseGetLikeProps) => {
  const queryResult = useQuery({
    queryKey: ['postUuid', postUuid],
    queryFn: () => getLikeCount({ postUuid }),
    enabled,
  });

  return queryResult;
};
