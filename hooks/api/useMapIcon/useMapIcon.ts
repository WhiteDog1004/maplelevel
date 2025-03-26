import { MAP_CODE } from '@/utils/mapCode';
import { useQuery } from '@tanstack/react-query';

interface UseMapIconProps {
  code: number;
  uuid: string;
  enabled?: boolean;
}

export const useMapIcon = ({ code, uuid, enabled }: UseMapIconProps) => {
  const queryResult = useQuery({
    queryKey: ['mapIcon', uuid],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${
          MAP_CODE.filter((map) => map.code === code)[0].region ? 'jms/393' : 'gms/62'
        }/map/${code}/icon`
      );

      return response;
    },
    enabled,
  });

  return queryResult;
};
