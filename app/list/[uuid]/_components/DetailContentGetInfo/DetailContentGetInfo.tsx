import { partyTypes } from '@/types/common';
import { MapDataType } from '@/types_db';
import { EXCHANGE_PARTY_TYPE } from '@/utils/recommendType';
import { Box, Paper, Typography } from '@mui/material';
import { getBadgeType } from './DetailContentGetInfo.const';

interface DetailContentGetInfoProps {
  data: MapDataType;
}

export const DetailContentGetInfo = ({ data }: DetailContentGetInfoProps) => {
  return (
    <Box className='flex flex-col gap-4 w-full justify-between'>
      <Box className='flex flex-col gap-2 items-start'>
        <Box>
          <Box className={`${getBadgeType[data.partyType as partyTypes]} justify-center`}>
            <Typography variant='body2'>
              {EXCHANGE_PARTY_TYPE[data.partyType as partyTypes]}
            </Typography>
          </Box>
        </Box>
        <Box className='flex gap-1 items-center justify-start'>
          <Typography variant='body1'>추천 레벨 : </Typography>
          <Typography variant='body2' color='info'>
            {data.level.min}
          </Typography>
          <Typography variant='caption' color='textDisabled'>
            ~
          </Typography>
          <Typography
            sx={{
              lineHeight: 1,
            }}
            variant='body2'
            color='info'
          >
            {data.level.max}
          </Typography>
        </Box>
      </Box>
      <Box className='flex flex-col gap-1'>
        <Typography variant='body2' color='textSecondary'>
          설명
        </Typography>
        <Paper className='p-2 h-28 overflow-y-auto' variant='outlined'>
          {data.caption}
        </Paper>
      </Box>
    </Box>
  );
};
