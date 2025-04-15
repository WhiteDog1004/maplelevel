'use client';

import { useLoginModalStore } from '@/store/useLoginModalStore';
import { createBrowserSupabaseClient } from '@/supabase/client';
import { Close } from '@mui/icons-material';
import { Avatar, Button, Card, Modal, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const LoginModal = () => {
  const supabase = createBrowserSupabaseClient();
  const { isLoginModal, setIsLoginModal } = useLoginModalStore();

  const handleDiscordLogin = async () => {
    setIsLoginModal(false);
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL_AUTH_SUCCESS,
      },
    });
  };

  const handleCloseModal = () => {
    setIsLoginModal(false);
  };

  return (
    <Modal open={isLoginModal} onClose={handleCloseModal}>
      <Card
        variant='outlined'
        className='flex flex-col items-center gap-4 w-2/3 max-w-max md:max-w-80 px-8 py-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <Typography variant='h5' color='warning'>
          로그인이 필요해요!
        </Typography>
        <Image width={44} height={37} src={'/images/husky/cry_0.png'} alt='husky' />
        <Typography variant='body2' textAlign='center'>
          로그인이 필요한 컨텐츠입니다.
          <br />
          바로 로그인 하시겠어요?
        </Typography>
        <Stack direction='column' width='100%' spacing={2}>
          <Button
            onClick={handleDiscordLogin}
            variant='outlined'
            sx={{
              justifyContent: 'center',
            }}
            className='flex items-center gap-2'
            color='primary'
          >
            <Avatar
              src={'/images/discord-icon.svg'}
              slotProps={{
                img: {
                  sx: {
                    objectFit: 'contain',
                  },
                },
              }}
              sx={{ width: 20, height: 20 }}
              alt={'discord'}
            />
            <Typography>로그인</Typography>
          </Button>
          <Button
            onClick={() => setIsLoginModal(false)}
            variant='outlined'
            color='warning'
            sx={{
              justifyContent: 'center',
            }}
            className='flex items-center justify-between gap-2'
          >
            <Close sx={{ fontSize: 20 }} />
            <Typography>싫어요</Typography>
          </Button>
        </Stack>
      </Card>
    </Modal>
  );
};
