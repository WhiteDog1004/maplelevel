import { MAP_CODE } from '@/utils/mapCode';
import { useQuery } from '@tanstack/react-query';

interface UseGetMapProps {
  code: number;
  enabled?: boolean;
}

export const useGetMap = ({ code, enabled }: UseGetMapProps) => {
  const queryResult = useQuery({
    queryKey: ['selectmap', code],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${
          MAP_CODE.filter((map) => map.code === code)[0].region ? 'jms/393' : 'gms/62'
        }/map/${code}`
      );

      return response.json();
    },
    enabled,
  });

  return queryResult;
};
