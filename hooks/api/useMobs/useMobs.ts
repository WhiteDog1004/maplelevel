import { RecommendMapProps } from '@/app/add/_types/add';
import { useQueries } from '@tanstack/react-query';

interface UseMobsProps {
  mobs: number[];
  recommendMap: RecommendMapProps['recommendMap'];
}

export const useMobs = ({ mobs, recommendMap }: UseMobsProps) => {
  const queries = useQueries({
    queries: mobs.map((mob) => ({
      enabled: mobs.length > 0,
      queryKey: ['getmob', mob],
      queryFn: async () => {
        const response = await fetch(
          `https://maplestory.io/api/${recommendMap.isJms ? 'jms/393' : 'gms/62'}/mob/${mob}/icon`
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
