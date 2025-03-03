import { RecommendMapProps } from '@/types/add';
import { Card } from '@mui/material';
import { useState } from 'react';
import { SelectInformation } from '../SelectInformation';
import { SelectMap } from '../SelectMap';
import { SelectMob } from '../SelectMob';

export const SelectCard = ({ id }: { id: number }) => {
  const [recommendMap, setRecommendMap] = useState<RecommendMapProps['recommendMap']>({
    minimap: '',
    code: 0,
    label: '',
  });
  return (
    <Card
      variant='outlined'
      sx={{ borderStartEndRadius: 0, border: 'none' }}
      className='flex flex-col md:flex-row gap-4 w-full justify-between p-4'
    >
      <div className='flex-1 h-max flex flex-col gap-2'>
        <SelectMap recommendMap={recommendMap} setRecommendMap={setRecommendMap} />
        <SelectMob recommendMap={recommendMap} />
      </div>
      <div className='flex-1'>
        <SelectInformation id={id} recommendMap={recommendMap} />
      </div>
    </Card>
  );
};
