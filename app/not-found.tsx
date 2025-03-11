'use client';

import { ArrowBackIosNew } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <Box className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
      <Box className='flex flex-col gap-8 items-center'>
        <Image src='/images/notFound.png' alt='notFound' width={171} height={170} />
        <Typography variant='h5' color='textSecondary'>
          페이지를 찾을 수 없습니다
        </Typography>
      </Box>
      <Button onClick={() => router.back()} variant='outlined' className='flex items-center gap-2'>
        <ArrowBackIosNew sx={{ fontSize: 16 }} />
        <Typography>뒤로가기</Typography>
      </Button>
    </Box>
  );
};

export default NotFound;
