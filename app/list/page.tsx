import { getLists } from '@/actions/listActions';
import { SearchInfoTypes } from '@/types/common';
import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { ListClientPage } from './_components/ListClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 목록`,
  description: 'maple-level list',
};

const List = async ({ searchParams }: { searchParams: Promise<SearchInfoTypes> }) => {
  const params = await searchParams;
  const { data, count } = await getLists(params);

  return (
    <Box className='w-full min-h-screen relative max-w-5xl m-auto h-full flex flex-row'>
      <ListClientPage lists={data || []} count={count} />
    </Box>
  );
};

export default List;
