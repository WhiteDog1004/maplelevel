'use client';

import { Database } from '@/types_db';
import { Box } from '@mui/material';
import { ListItemCard } from '../ListItemCard';

interface ListClientPageProps {
  lists: Database['public']['Tables']['recommend-list']['Row'][];
}

export const ListClientPage = ({ lists }: ListClientPageProps) => {
  console.log(lists);

  return (
    <Box className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center w-full h-max gap-8 py-16 px-8'>
      {lists.map((list) => (
        <ListItemCard key={list.uuid} data={list} />
      ))}
    </Box>
  );
};
