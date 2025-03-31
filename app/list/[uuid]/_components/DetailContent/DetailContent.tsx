import { ListDetailOptions } from '@/types/common';
import { ArrowDropDown } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DetailContentGetMap } from '../DetailContentGetMap';

export const DetailContent = ({ list }: ListDetailOptions) => {
  return (
    <Box className='flex flex-col gap-8'>
      {list.map_data
        .sort((a, b) => (a.level.min || 0) - (b.level.min || 0))
        .map((data, index) => (
          <Box className='flex flex-col items-center gap-8' key={index}>
            <DetailContentGetMap data={data || []} />
            {list.map_data.length !== index + 1 && <ArrowDropDown />}
          </Box>
        ))}
    </Box>
  );
};
