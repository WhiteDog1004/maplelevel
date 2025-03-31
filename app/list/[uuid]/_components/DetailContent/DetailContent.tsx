import { ListDetailOptions } from '@/types/common';
import { ArrowDropDown } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DetailContentGetInfo } from '../DetailContentGetInfo';
import { DetailContentGetMap } from '../DetailContentGetMap';

export const DetailContent = ({ list }: ListDetailOptions) => {
  return (
    <Box className='flex flex-col gap-8'>
      {list.map_data
        .sort((a, b) => (a.level.min || 0) - (b.level.min || 0))
        .map((data, index) => (
          <Box className='flex flex-col items-center gap-8' key={index}>
            <Box className='flex sm:flex-row flex-col justify-center sm:gap-4 gap-2 w-full'>
              <DetailContentGetMap code={data.map || 0} mobs={data.mobs || []} />
              <DetailContentGetInfo data={data} />
            </Box>
            {list.map_data.length !== index + 1 && <ArrowDropDown />}
          </Box>
        ))}
    </Box>
  );
};
