'use client';

import { Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { MainAddBox } from '../MainAddBox';
import { MainListBox } from '../MainListBox';

export const MainClientPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Stack alignItems='center'>
      <Stack
        direction='row'
        ml={isMobile ? 0 : -17}
        gap={2}
        justifyContent='center'
        alignItems='center'
      >
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
      <Stack>
        <Typography variant='caption' color='textDisabled'>
          Data sourced from
        </Typography>
        <Typography variant='caption' color='textDisabled'>
          -{' '}
          <Link href='https://maplestory.io/' target='_blank'>
            Maplestory.io
          </Link>
        </Typography>
        <Typography textAlign='left' variant='caption' color='textDisabled'>
          -{' '}
          <Link href='https://mapledb.kr/' target='_blank'>
            MapleDB
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
