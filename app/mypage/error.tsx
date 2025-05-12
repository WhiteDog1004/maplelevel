'use client';

import { useDiscordStore } from '@/store/useDiscordStore';
import { useErrorStore } from '@/store/useErrorStore';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginPage from '../auth/login/page';

const MypageErrorPage = () => {
  const router = useRouter();
  const { user } = useDiscordStore();

  const setIsError = useErrorStore((state) => state.setIsError);

  useEffect(() => {
    setIsError(true);
    return () => setIsError(false);
  }, []);

  if (!user) return <LoginPage />;
  return (
    <Box className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
      <Box className='flex flex-col gap-8 items-center'>
        <Image src='/images/notFound.png' alt='notFound' width={171} height={170} />
        <Box className='flex flex-col gap-1 items-center'>
          <Typography variant='h5' color='textSecondary'>
            에러가 발생했어요!
          </Typography>
          <Typography variant='body2' color='textDisabled' textAlign='center'>
            지속적으로 에러가 발생한다면 문의 부탁드리겠습니다.
            <br />
            불편을 드려 죄송합니다.
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

export default MypageErrorPage;
