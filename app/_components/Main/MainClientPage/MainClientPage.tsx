'use client';

import { Box, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { MainQuickBox } from '../MainQuickBox';
import { UsefulSite } from '../UsefulSite';

const MainAddBox = dynamic(() => import('../MainAddBox').then((mod) => mod.MainAddBox), {
  ssr: false,
  loading: () => <Box minWidth='100%' minHeight={280} />,
});

const MainListBox = dynamic(() => import('../MainListBox').then((mod) => mod.MainListBox), {
  ssr: false,
  loading: () => <Box minWidth='100%' minHeight={280} />,
});

export const MainClientPage = () => {
  return (
    <Stack alignItems='center' gap={4} className='mt-8 md:mt-32'>
      <Stack className='min-h-[704] md:min-h-[408]'>
        <Stack
          direction='row'
          className='ml-0 md:-ml-4'
          gap={2}
          justifyContent='center'
          alignItems='center'
        >
          <Image
            src='https://www.maplelevel.gg/images/mapleland.webp'
            quality={60}
            sizes='120px'
            priority
            fetchPriority='high'
            loading='eager'
            alt='mapleland'
            width={120}
            height={80}
          />
          <Stack>
            <Typography variant='h4'>레벨지지</Typography>
            <Typography color='textSecondary'>메이플랜드 사냥터</Typography>
          </Stack>
        </Stack>
        <Stack gap={2} p={2}>
          <MainQuickBox />
          <Stack className='flex-col md:!flex-row' gap={2}>
            <MainListBox />
            <MainAddBox />
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={2} p={2}>
        <Typography variant='h6'>유용한 사이트</Typography>
        <UsefulSite />
      </Stack>

      <Stack className='w-full md:w-max' px={2} pb={2}>
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
