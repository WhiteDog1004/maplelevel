'use client';

import { useErrorStore } from '@/store/useErrorStore';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const EditErrorPage = () => {
  const router = useRouter();

  const setIsError = useErrorStore((state) => state.setIsError);

  useEffect(() => {
    setIsError(true);
    return () => setIsError(false);
  }, []);

  return (
    <Box className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
      <Box className='flex flex-col gap-8 items-center'>
        <Image src='/images/notFound.png' alt='notFound' width={171} height={170} />
        <Box className='flex flex-col gap-1 items-center'>
          <Typography variant='h5' color='textSecondary'>
            페이지를 찾을 수 없어요!
          </Typography>
          <Typography variant='body2' color='textDisabled' textAlign='center'>
            권한이 없거나 없는 페이지입니다.
          </Typography>
        </Box>
      </Box>
      <Button onClick={() => router.back()} variant='outlined' className='flex items-center gap-2'>
        <ArrowBackIosNew sx={{ fontSize: 16 }} />
        <Typography>뒤로가기</Typography>
      </Button>
    </Box>
  );
};

export default EditErrorPage;
