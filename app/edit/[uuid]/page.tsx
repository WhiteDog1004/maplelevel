import { getEditData } from '@/actions/listActions';
import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { EditClientPage } from './_components/EditClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 수정`,
  description: '메이플랜드 사냥터 수정',
};

type Params = Promise<{ uuid: string }>;

const LevelEdit = async ({ params }: { params: Params }) => {
  const { uuid } = await params;
  const data = await getEditData(uuid);

  return (
    <Box className='w-full min-h-screen h-full flex flex-row justify-center items-start'>
      {data && <EditClientPage uuid={uuid} data={data} />}
    </Box>
  );
};

export default LevelEdit;
