import { MAP_CODE } from '@/utils/mapCode';
import { useQuery } from '@tanstack/react-query';

interface UseMinimapProps {
  code?: number;
  uuid: string;
  enabled?: boolean;
}

export const useMinimap = ({ code, uuid, enabled }: UseMinimapProps) => {
  const queryResult = useQuery({
    queryKey: ['minimap', uuid],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${
          MAP_CODE.filter((map) => map.code === code)[0].region ? 'jms/393' : 'gms/62'
        }/map/${code}/minimap`
      );

      if (!response.ok) {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }

      return response;
    },
    retry: false,
    enabled,
  });

  return queryResult;
};
