import { RecommendMapProps } from '@/app/add/_types/add';
import { useQuery } from '@tanstack/react-query';

interface UseGetMapProps {
  map: RecommendMapProps['recommendMap'];
  enabled?: boolean;
}

export const useGetMap = ({ map, enabled }: UseGetMapProps) => {
  const queryResult = useQuery({
    queryKey: ['selectmap', map.code],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${map.isJms ? 'jms/393' : 'gms/62'}/map/${map.code}`
      );

      return response.json();
    },
    enabled,
  });

  return queryResult;
};
