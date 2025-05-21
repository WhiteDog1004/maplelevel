import { getQuickSearchDatas } from '@/actions/quickSearchActions';
import { useQuery } from '@tanstack/react-query';

interface GetQuickSearchProps {
  map: string;
  enabled?: boolean;
}

export const useGetQuickSearch = ({ map }: GetQuickSearchProps) => {
  const queryResult = useQuery({
    queryKey: ['map', map],
    queryFn: () => getQuickSearchDatas(map),
    enabled: !!map,
  });

  return queryResult;
};
