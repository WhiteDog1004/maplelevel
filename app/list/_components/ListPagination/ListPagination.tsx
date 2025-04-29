import { useListPaginationStore } from '@/store/useListPaginationStore';
import { PAGE_SIZE } from '@/utils/pageSize';
import { Box, Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ChangeEvent } from 'react';

interface ListPaginationProps {
  count: number;
}

export const ListPagination = ({ count }: ListPaginationProps) => {
  const router = useRouter();
  const { page, setPage } = useListPaginationStore();
  const params = useSearchParams();

  const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);

    const query = new URLSearchParams({
      ...(params.get('title') && { title: params.get('title') || '' }),
      ...(params.get('job') && { job: params.get('job') || '' }),
      ...(params.get('level') && { level: params.get('level') || '' }),
      ...(params.get('type') && { type: params.get('type') || '' }),
      ...(params.get('partyType') && { partyType: params.get('partyType') || '' }),
      ...(params.get('sort') === 'like' && { sort: params.get('sort') || '' }),
      page: page.toString() || '1',
    }).toString();

    window.scrollTo(0, 0);
    return router.push(`/list?${query}`);
  };

  return (
    <Box className='flex justify-center'>
      <Pagination
        count={Math.ceil(count / PAGE_SIZE)}
        page={Number(params.get('page')) || page}
        onChange={handleChangePage}
      />
    </Box>
  );
};
