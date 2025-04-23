import { getDetailList } from '@/actions/listActions';
import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { ListDetailClientPage } from './_components/ListDetailClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 상세`,
  description: 'maple-level post-detail',
};

type Params = Promise<{ uuid: string }>;

const ListDetail = async ({ params }: { params: Params }) => {
  const { uuid } = await params;
  const list = await getDetailList(uuid);

  return (
    <Box className='w-full min-h-screen relative max-w-5xl m-auto h-full flex flex-row'>
      {list && <ListDetailClientPage list={list} />}
    </Box>
  );
};

export default ListDetail;
