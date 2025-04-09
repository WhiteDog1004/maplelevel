'use client';

import { getAdmin } from '@/actions/adminActions';
import { useDiscordStore } from '@/store/useDiscordStore';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

export const AdminClientPage = () => {
  const { user } = useDiscordStore();
  const handleAdmin = async () => {
    await getAdmin();
  };

  if (user?.user_metadata.provider_id !== '313963147432034306')
    return (
      <Box className='w-full h-screen flex flex-col justify-center items-center gap-4'>
        <Box className='flex relative max-w-64 h-auto rounded-lg overflow-hidden'>
          <Image src='/images/wolfdog.png' alt='wolfdog' width={1024} height={1536} unoptimized />
        </Box>
        <Typography>WolfDog</Typography>
      </Box>
    );
  if (user?.user_metadata.provider_id === '313963147432034306')
    return (
      <Box className='w-full h-screen flex flex-col justify-center items-center gap-4'>
        <Box className='flex relative max-w-64 h-auto rounded-lg overflow-hidden'>
          <Image src='/images/wolfdog.png' alt='wolfdog' width={1024} height={1536} unoptimized />
        </Box>
        <Typography>어드민 페이지</Typography>
        {user.user_metadata.role !== 'admin' && <Button onClick={() => handleAdmin()}>클릭</Button>}
      </Box>
    );
};
