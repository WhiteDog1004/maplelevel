'use client';

import { useErrorStore } from '@/store/useErrorStore';
import { Database } from '@/types_db';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ListItemCard } from '../ListItemCard';
import { ListPagination } from '../ListPagination';
import { SearchInformation } from '../SearchInformation';

interface ListClientPageProps {
  lists: Database['public']['Tables']['recommend-list']['Row'][];
  count: number;
}

export const ListClientPage = ({ lists, count }: ListClientPageProps) => {
  const router = useRouter();
  const setIsError = useErrorStore((state) => state.setIsError);

  useEffect(() => {
    if (!lists.length) {
      setIsError(true);
      return () => setIsError(false);
    }
  }, [lists]);

  return (
    <Box className='flex flex-col gap-16 w-full py-16 px-8'>
      {lists.length ? (
        <Box className='flex justify-center items-center w-full'>
          <SearchInformation />
        </Box>
      ) : undefined}
      {lists.length ? (
        <>
          <Box className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center w-full h-max gap-8'>
            {lists.map((list) => (
              <ListItemCard key={list.uuid} data={list || []} />
            ))}
          </Box>

          <ListPagination count={count} />
        </>
      ) : (
        <Box className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
          <Box className='flex flex-col gap-2 items-center'>
            <Image src='/images/husky/cry_0.png' alt='notFound' width={44} height={37} />
            <Box className='flex flex-col gap-1 items-center'>
              <Typography variant='h5' color='textSecondary'>
                검색 결과가 없습니다
              </Typography>
              <Typography variant='body2' color='textDisabled' textAlign='center'>
                데이터가 없습니다.
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={() => router.back()}
            variant='outlined'
            className='flex items-center gap-2'
          >
            <ArrowBackIosNew sx={{ fontSize: 16 }} />
            <Typography>뒤로가기</Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};
