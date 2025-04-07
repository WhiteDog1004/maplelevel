'use client';

import { createBrowserSupabaseClient } from '@/supabase/client';
import { ArrowBackIosNew, Login } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const NeedLogin = () => {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  const handleDiscordLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL_AUTH_SUCCESS,
      },
    });
  };

  return (
    <Box className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
      <Box className='flex flex-col gap-8 items-center'>
        <Image src='/images/notFound.png' alt='notFound' width={171} height={170} />
        <Box className='flex flex-col gap-1 items-center'>
          <Typography variant='h5' color='textSecondary'>
            로그인이 필요합니다.
          </Typography>
          <Typography variant='body2' color='textDisabled' textAlign='center'>
            해당 페이지는 로그인이 필요한 페이지입니다.
            <br />
            로그인 후에 이용해주세요.
          </Typography>
        </Box>
      </Box>
      <Stack direction='column' spacing={2}>
        <Button
          onClick={handleDiscordLogin}
          variant='outlined'
          sx={{
            justifyContent: 'space-between',
          }}
          className='flex items-center gap-2'
          color='success'
        >
          <Login sx={{ fontSize: 20 }} />
          <Typography>로그인</Typography>
        </Button>
        <Button
          onClick={() => router.back()}
          variant='outlined'
          sx={{
            justifyContent: 'space-between',
          }}
          className='flex items-center justify-between gap-2'
        >
          <ArrowBackIosNew sx={{ fontSize: 20 }} />
          <Typography>뒤로가기</Typography>
        </Button>
      </Stack>
    </Box>
  );
};
