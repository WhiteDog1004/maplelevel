'use client';

import { useDiscordStore } from '@/store/useDiscordStore';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const WolfdogClientPage = () => {
  const router = useRouter();
  const { user } = useDiscordStore();

  useEffect(() => {
    if (user?.user_metadata.provider_id === '313963147432034306') {
      router.push('/wolfdog/admin');
    }
  }, [user]);

  if (user?.user_metadata.provider_id !== '313963147432034306')
    return (
      <Box className='w-full h-screen flex flex-col justify-center items-center gap-4'>
        <Box className='flex relative max-w-64 h-auto rounded-lg overflow-hidden'>
          <Image src='/images/wolfdog.png' alt='wolfdog' width={1024} height={1536} unoptimized />
        </Box>
        <Typography>WolfDog</Typography>
      </Box>
    );
};
