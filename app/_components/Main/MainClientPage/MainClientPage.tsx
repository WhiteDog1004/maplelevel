'use client';

import { Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { MainAddBox } from '../MainAddBox';
import { MainListBox } from '../MainListBox';

export const MainClientPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Stack alignItems='center'>
      <Stack direction='row' gap={2} justifyContent='center' alignItems='center'>
        <Image src='/images/mapleland.webp' alt='mapleland' width={120} height={80} />
        <Stack>
          <Typography variant='h4'>레벨지지</Typography>
          <Typography color='textSecondary'>메이플랜드 사냥터</Typography>
        </Stack>
      </Stack>
      <Stack direction={isMobile ? 'column' : 'row'} gap={2} p={2}>
        <MainListBox />
        <MainAddBox />
      </Stack>
      <Typography variant='caption' color='textDisabled'>
        Data sourced from Maplestory.io
      </Typography>
    </Stack>
  );
};
