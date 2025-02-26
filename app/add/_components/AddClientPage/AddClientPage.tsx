'use client';

import { useWriteStore } from '@/store/useWriteValueStore';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { EmptyCard } from '../EmptyCard';
import { SelectCard } from '../SelectCard';
import { TitleInformation } from '../TitleInformation';

export const AddClientPage = () => {
  const { writeValues } = useWriteStore();

  useEffect(() => {
    console.log(writeValues);
  }, [writeValues]);
  return (
    <div className='w-full flex flex-col gap-6 items-center p-10 max-w-3xl'>
      <div className='flex flex-col gap-1'>
        <Typography variant='body2' color='textSecondary'>
          당신이 걸어오셨던 여정을 공유해 보세요
        </Typography>
        <Typography variant='h3'>사냥터 추천</Typography>
      </div>
      <TitleInformation />
      {writeValues.options?.map((list, index) => (
        <SelectCard key={index} id={index} />
      ))}
      <EmptyCard />
    </div>
  );
};
