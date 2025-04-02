import { getPercentMap } from '@/actions/detailActions';
import { partyTypes } from '@/types/common';
import { MapDataType } from '@/types_db';
import { EXCHANGE_PARTY_TYPE } from '@/utils/recommendType';
import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getBadgeType } from './DetailContentGetInfo.const';

interface DetailContentGetInfoProps {
  data: MapDataType;
  job: string;
}

export const DetailContentGetInfo = ({ data, job }: DetailContentGetInfoProps) => {
  const [percent, setPercent] = useState<number | null>(null);
  useEffect(() => {
    if (!data || !job) return;
    const getData = async () => {
      const result = await getPercentMap({
        level: { min: data.level.min || 0, max: data.level.max || 0 },
        job,
        mapCode: data.map || 0,
      });
      setPercent(Number(result));
    };

    getData();
  }, [data, job]);

  return (
    <Box className='flex flex-col gap-4 w-full justify-between'>
      <Box className='flex flex-col gap-2 items-start'>
        <Box>
          <Box className={`${getBadgeType[data.partyType as partyTypes]} justify-center`}>
            <Typography variant='body1'>
              {EXCHANGE_PARTY_TYPE[data.partyType as partyTypes]}
            </Typography>
          </Box>
        </Box>

        <Box className='flex gap-1 items-center justify-start'>
          <Typography variant='h6'>추천 레벨 : </Typography>
          <Typography variant='h6' color='primary'>
            {data.level.min}
          </Typography>
          <Typography variant='body2' color='textDisabled'>
            ~
          </Typography>
          <Typography
            sx={{
              lineHeight: 1,
            }}
            variant='h6'
            color='primary'
          >
            {data.level.max}
          </Typography>
        </Box>
        {percent && (
          <Box className='flex flex-col items-start'>
            <Typography variant='body2' color='textSecondary'>
              이 맵은 직업과 평균 레벨 기준으로
            </Typography>
            <Box className='flex items-center gap-1'>
              <Typography variant='h6' color={percent > 50 ? 'error' : 'warning'}>
                {percent}%
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                의 선택을 받고 있어요!
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <Box className='flex flex-col gap-1'>
        <Typography variant='body2' color='textSecondary'>
          설명
        </Typography>
        <Paper
          className='p-2 h-28 overflow-y-auto'
          variant='outlined'
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {data.caption}
        </Paper>
      </Box>
    </Box>
  );
};
