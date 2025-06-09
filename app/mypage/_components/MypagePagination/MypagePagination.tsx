import { useMypagePaginationStore } from '@/store/useMypagePaginationStore';
import { MYPAGE_PAGE_SIZE } from '@/utils/pageSize';
import { SITE_MAP } from '@/utils/sitemap';
import { Box, Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ChangeEvent } from 'react';

interface MypagePaginationProps {
  count: number;
}

export const MypagePagination = ({ count }: MypagePaginationProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const { page, setPage } = useMypagePaginationStore();

  const handleChangePage = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);

    const query = new URLSearchParams({
      page: page.toString() || '1',
    }).toString();

    window.scrollTo(0, 0);
    return router.push(`${SITE_MAP.MYPAGE}?${query}`);
  };

  return (
    <Box className='flex justify-center'>
      <Pagination
        count={Math.ceil(count / MYPAGE_PAGE_SIZE)}
        page={Number(params.get('page')) || page}
        onChange={handleChangePage}
      />
    </Box>
  );
};
