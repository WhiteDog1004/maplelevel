'use client';

import { NoticeOptions } from '@/types/common';
import { SITE_MAP } from '@/utils/sitemap';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { DetailContent } from '../DetailContent';
import { DetailTitle } from '../DetailTitle';

export const NoticeDetailClientPage = ({ post }: { post: NoticeOptions }) => {
  const router = useRouter();
  return (
    <Box className='flex flex-col gap-6 w-full px-4 py-12'>
      <DetailTitle post={post} />
      <DetailContent post={post} />
      <Button
        variant='outlined'
        color='success'
        className='max-w-12'
        onClick={() => router.push(SITE_MAP.NOTICE)}
      >
        목록
      </Button>
    </Box>
  );
};
