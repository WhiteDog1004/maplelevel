import { getLists } from '@/actions/listActions';
import { SearchInfoTypes } from '@/types/common';
import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { ListClientPage } from './_components/ListClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 목록`,
  description: 'maple-level',
};

const List = async ({ searchParams }: { searchParams: SearchInfoTypes }) => {
  const params = await searchParams;
  const lists = await getLists(params);

  return (
    <Box className='w-full min-h-screen max-w-5xl m-auto h-full flex flex-row'>
      <ListClientPage lists={lists || []} />
    </Box>
  );
};

export default List;
