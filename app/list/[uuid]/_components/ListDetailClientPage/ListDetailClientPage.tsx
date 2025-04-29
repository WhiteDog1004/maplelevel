'use client';

import type { ListDetailOptions } from '@/types/common';
import { Box, Divider } from '@mui/material';
import { DetailContent } from '../DetailContent';
import { DetailTitle } from '../DetailTitle';

export const ListDetailClientPage = ({ list }: ListDetailOptions) => {
  return (
    <Box className='flex flex-col gap-6 w-full px-4 py-12'>
      <DetailTitle list={list} />
      <Divider />
      <DetailContent list={list} />
    </Box>
  );
};
