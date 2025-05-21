import { SITE_TITLE } from '@/utils/string';
import { Stack } from '@mui/material';
import type { Metadata } from 'next';
import { QuickSearchClientPage } from './_components/QuickSearchClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 빠른검색`,
  description: '메이플랜드 사냥터 빠른검색',
};

const QuickSearch = async () => {
  return (
    <Stack
      className='w-full min-h-[calc(100vh-77px)] relative max-w-5xl m-auto h-full'
      alignItems='center'
      justifyContent='flex-start'
      py={8}
    >
      <QuickSearchClientPage />
    </Stack>
  );
};

export default QuickSearch;
