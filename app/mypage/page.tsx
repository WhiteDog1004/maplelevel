import { getMyLikeLists, getMyLists } from '@/actions/mypageActions';
import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { MypageClientPage } from './_components/MypageClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 마이페이지`,
  description: '메이플랜드 마이페이지',
};

type Params = Promise<{ page: string }>;

const List = async ({ searchParams }: { searchParams: Params }) => {
  const { page } = await searchParams;
  const list = await getMyLists(page || '1');
  const likeList = await getMyLikeLists(page || '1');

  return (
    <Box className='w-full min-h-[calc(100vh-77px)] relative max-w-5xl m-auto h-full flex flex-row'>
      <MypageClientPage list={list} likeList={likeList} />
    </Box>
  );
};

export default List;
