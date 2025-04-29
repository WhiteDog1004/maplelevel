import { SITE_TITLE } from '@/utils/string';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { AddClientPage } from './_components/AddClientPage';

export const metadata: Metadata = {
  title: `${SITE_TITLE} - 사냥터 추천`,
  description: '메이플랜드 게시글 작성',
};

const LevelAdd = async () => {
  return (
    <Box className='w-full min-h-screen h-full flex flex-row justify-center items-start'>
      <AddClientPage />
    </Box>
  );
};

export default LevelAdd;
