'use client';

import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { NoticeTable } from '../NoticeTable';

export const NoticeClientPage = () => {
  return (
    <Box className='w-full h-screen p-16 dark:bg-zinc-700 flex justify-center items-start'>
      <Stack className='w-full justify-center items-center'>
        <Image
          className='w-[44] h-[37]'
          unoptimized
          width={44}
          height={37}
          src={'/images/husky/stand1_1.png'}
          alt='husky'
        />
        <Typography variant='h3'>공지사항</Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          레벨지지에서 안내드립니다
        </Typography>
        <NoticeTable />
      </Stack>
    </Box>
  );
};
