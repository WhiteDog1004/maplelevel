import { useDarkModeStore } from '@/store/useDarkModeStore';
import { RecommendMapProps } from '@/types/add';
import { Box, Card } from '@mui/material';
import { useState } from 'react';
import { SelectInformation } from '../SelectInformation';
import { SelectMap } from '../SelectMap';
import { SelectMob } from '../SelectMob';

export const SelectCard = ({ id }: { id: number }) => {
  const { darkMode } = useDarkModeStore();
  const [recommendMap, setRecommendMap] = useState<RecommendMapProps['recommendMap']>({
    minimap: '',
    code: 0,
    label: '',
  });

  return (
    <Card
      variant='outlined'
      sx={{ borderStartEndRadius: 0, border: darkMode ? 'none' : undefined }}
      className='flex flex-col md:flex-row gap-4 w-full justify-between p-4'
    >
      <Box className='flex-1 h-max flex flex-col gap-2'>
        <SelectMap recommendMap={recommendMap} setRecommendMap={setRecommendMap} />
        <SelectMob id={id} recommendMap={recommendMap} />
      </Box>
      <Box className='flex-1'>
        <SelectInformation id={id} recommendMap={recommendMap} />
      </Box>
    </Card>
  );
};
