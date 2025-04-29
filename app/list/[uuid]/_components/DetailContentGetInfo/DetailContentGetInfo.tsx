import { getPercentMap } from '@/actions/detailActions';
import type { partyTypes } from '@/types/common';
import type { MapDataType } from '@/types_db';
import { formatToKoreanUnits } from '@/utils/formatNumber';
import { getLabelByJobs } from '@/utils/jobs';
import { getTextByCode } from '@/utils/mapCode';
import { EXCHANGE_PARTY_TYPE } from '@/utils/recommendType';
import { Box, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
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
          <Box className='flex flex-col items-start mt-2'>
            <Stack direction='row' spacing={0.5}>
              <Stack direction='row'>
                <Typography noWrap variant='body2' color='primary'>
                  {getTextByCode(Number(data.map))?.kor.split(':')[1]}
                </Typography>
                <Typography noWrap variant='body2' color='textSecondary'>
                  맵이
                </Typography>
              </Stack>
              <Stack direction='row' spacing={0.5}>
                <Typography noWrap variant='body2' color='primary'>
                  {getLabelByJobs(job)?.label}
                </Typography>
                <Typography noWrap variant='body2' color='textSecondary'>
                  평균 레벨 기준으로
                </Typography>
              </Stack>
            </Stack>
            <Box className='flex items-center gap-1'>
              <Typography variant='h6' color={percent >= 50 ? 'error' : 'warning'}>
                {percent}%
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                의 선택을 받고 있어요!
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <Stack width='100%' direction='column' gap={2}>
        <Stack width='100%' direction='column' gap={0.5}>
          <Typography color='textSecondary' variant='body2'>
            자리 혼잡도
          </Typography>
          <ToggleButtonGroup fullWidth size='small' disabled value={data.place}>
            <ToggleButton color='success' value={1}>
              원활
            </ToggleButton>
            <ToggleButton value={2}>보통</ToggleButton>
            <ToggleButton color='warning' value={3}>
              혼잡
            </ToggleButton>
            <ToggleButton color='error' value={4}>
              매우혼잡
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {data.timeExp && (
          <Stack gap={0.5}>
            <Typography color='textSecondary' variant='body2'>
              분당 경험치
            </Typography>

            <Paper sx={{ p: 2 }}>
              <Stack direction='row' alignItems='center' gap={0.5}>
                <Typography variant='body2' color='textSecondary'>
                  {data.timeExpType === 'minute' ? '5분당' : '한타임당'}
                </Typography>
                <Typography color='success'>약 {formatToKoreanUnits(data.timeExp)}</Typography>
                <Typography variant='body2' color='textSecondary'>
                  경험치를 획득해요!
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        )}

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
      </Stack>
    </Box>
  );
};
