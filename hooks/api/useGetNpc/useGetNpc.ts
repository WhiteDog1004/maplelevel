import { useQuery } from '@tanstack/react-query';

interface UseMapIconProps {
  code: number;
}

export const useGetNpc = ({ code }: UseMapIconProps) => {
  const queryResult = useQuery({
    queryKey: ['npc', code],
    queryFn: async () => {
      const response = await fetch(`https://maplestory.io/api/gms/62/npc/${code}/icon`);

      return response;
    },
  });

  return queryResult;
};
