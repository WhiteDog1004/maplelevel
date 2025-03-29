import { MAP_CODE } from '@/utils/mapCode';
import { useQueries } from '@tanstack/react-query';

interface UseMobsProps {
  mobs: number[];
  code: number;
}

export const useMobs = ({ mobs, code }: UseMobsProps) => {
  const queries = useQueries({
    queries: mobs.map((mob) => ({
      enabled: mobs.length > 0,
      queryKey: ['getmob', mob],
      queryFn: async () => {
        const response = await fetch(
          `https://maplestory.io/api/${
            MAP_CODE.filter((map) => map.code === code)[0].region ? 'jms/393' : 'gms/62'
          }/mob/${mob}/icon`
        );

        if (!response.ok) {
          return '/images/husky/cry_0.png';
        }

        return response.url;
      },
    })),
  });
  return queries;
};
