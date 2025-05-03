import { useMinimap } from '@/hooks/api';
import { useDarkModeStore } from '@/store/useDarkModeStore';
import type { Database } from '@/types_db';
import { formatToKoreanUnits } from '@/utils/formatNumber';
import { getTimeAgo } from '@/utils/getTimeAgo';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { getTextByCode } from '@/utils/mapCode';
import { Favorite, ManageSearch } from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  Chip,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface ListItemCardProps {
  data: Database['public']['Tables']['recommend-list']['Row'];
}

export const ListItemCard = ({ data }: ListItemCardProps) => {
  const router = useRouter();
  const { darkMode } = useDarkModeStore();
  const searchParams = useSearchParams();
  const searchLevel = searchParams.get('level');

  const result = data.map_data.filter(
    (map) =>
      (map.level.min || 0) <= Number(searchLevel) && (map.level.max || 0) >= Number(searchLevel)
  );
  const resultData = searchLevel ? { ...data, map_data: result } : data;

  const highestMap =
    resultData.map_data.length > 0
      ? resultData.map_data.reduce((max, current) => {
          return (current.level.min || 0) > (max.level.min || 0) ? current : max;
        })
      : null;

  const lowestMap =
    resultData.map_data.length > 0
      ? resultData.map_data.reduce((min, current) => {
          return (current.level.min || 0) < (min.level.min || 0) ? current : min;
        })
      : null;

  const { data: minimap, refetch } = useMinimap({
    code: lowestMap?.map,
    uuid: resultData.uuid,
  });

  useEffect(() => {
    refetch();
  }, [lowestMap]);

  if (!data) return;
  return (
    <Badge
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ width: 280 }}
      color={data.like > 5 ? 'error' : 'info'}
      className='w-max md:w-full'
      badgeContent={
        <Box className='flex justify-center items-center gap-1'>
          <Favorite className='text-white size-5' fontSize='inherit' />
          <Typography variant='body2' className='text-white'>
            {data.like || '0'}
          </Typography>
        </Box>
      }
    >
      <Card variant='outlined' className='md:w-full' sx={{ width: 280 }}>
        <CardActionArea
          onClick={() => router.push(`/list/${data.uuid}`)}
          sx={{
            p: 2,
          }}
          className='flex flex-col gap-4 relative h-full'
        >
          <Typography mb={1} maxWidth={200} noWrap color='textPrimary'>
            {data.title}
          </Typography>
          <Box className='flex flex-col gap-2'>
            <Box className='flex gap-4 items-start justify-between'>
              <Box className='w-28 h-28 relative overflow-hidden'>
                {minimap && (
                  <Image
                    className='h-full object-contain'
                    unoptimized
                    sizes='140px'
                    width={140}
                    height={140}
                    src={minimap.url}
                    alt='minimap'
                  />
                )}
              </Box>
              <Box className='flex flex-col items-end text-end gap-4 min-w-24'>
                <Box className='flex flex-col gap-1'>
                  <Box className='flex gap-1 items-center justify-end'>
                    <Image
                      width={20}
                      height={20}
                      unoptimized
                      src={`/images/class/${getClassImages(
                        getLabelByJobs(data.job)?.id || 0
                      )}.webp`}
                      alt='class'
                    />
                    <Typography variant='body2'>{getLabelByJobs(data.job)?.label}</Typography>
                  </Box>
                  <Box className='flex gap-1 items-center justify-end'>
                    <Typography variant='body2'>
                      레벨 : {Math.min(...resultData.map_data.map((item) => item.level.min || 0))}
                    </Typography>
                    <Typography variant='caption' color='textDisabled'>
                      ~
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: 1,
                      }}
                      variant='caption'
                      color='textDisabled'
                    >
                      {searchLevel
                        ? Math.max(resultData.map_data[0]?.level.max || 0)
                        : Math.max(...resultData.map_data.map((item) => item.level.max || 0))}
                    </Typography>
                  </Box>
                </Box>

                <Paper elevation={4} sx={{ p: 1, width: '100%' }}>
                  <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    gap={0.5}
                    whiteSpace='nowrap'
                  >
                    {resultData.map_data[0]?.timeExp && resultData.map_data[0]?.timeExpType ? (
                      <>
                        <Typography variant='caption' color='textSecondary'>
                          {resultData.map_data[0].timeExpType === 'minute' ? '5분당' : '한타임당'}
                        </Typography>
                        <Typography color='success' variant='caption'>
                          약 {formatToKoreanUnits(resultData.map_data[0].timeExp)}
                        </Typography>
                      </>
                    ) : (
                      <Typography color='textDisabled' variant='caption'>
                        경험치 작성 안됨
                      </Typography>
                    )}
                  </Stack>
                </Paper>
              </Box>
            </Box>

            <Box className='flex flex-col gap-2'>
              <Box className='flex flex-col items-center gap-1'>
                {resultData.map_data.length <= 1 || searchLevel ? (
                  <Typography variant='body2'>
                    {getTextByCode(Number(lowestMap?.map))?.kor?.split(':')[1]}
                  </Typography>
                ) : (
                  <Box className='flex flex-row items-center gap-1 max-w-60'>
                    <Typography noWrap variant='body2'>
                      {getTextByCode(Number(lowestMap?.map))?.kor?.split(':')[1]}
                    </Typography>
                    <Typography variant='caption' color='textDisabled'>
                      ~
                    </Typography>
                    <Typography
                      noWrap
                      variant='caption'
                      sx={{ lineHeight: 1 }}
                      color='textDisabled'
                    >
                      {getTextByCode(Number(highestMap?.map))?.kor?.split(':')[1]}
                    </Typography>
                  </Box>
                )}

                <Paper
                  className='flex justify-center items-center py-1 px-2'
                  sx={{ width: '100%' }}
                  variant={darkMode ? 'elevation' : 'outlined'}
                >
                  {lowestMap?.caption ? (
                    <Typography
                      width='100%'
                      textAlign='center'
                      noWrap
                      variant='caption'
                      color='textSecondary'
                    >
                      {lowestMap?.caption}
                    </Typography>
                  ) : (
                    <Typography variant='caption' color='textDisabled'>
                      설명 없음
                    </Typography>
                  )}
                </Paper>
              </Box>
              <Box className='flex justify-between items-center' color='GrayText'>
                <Box className='flex items-end gap-1'>
                  <Chip
                    sx={{
                      gap: 0.5,
                      maxWidth: 108,
                      color: 'GrayText',
                    }}
                    color='default'
                    size='small'
                    avatar={
                      <Avatar alt='avatar' src={data.user.avatar_url || '/images/mushroom.png'} />
                    }
                    label={
                      <Typography noWrap variant='caption'>
                        {data.user.nickname || '익명의 모험가'}
                      </Typography>
                    }
                    variant='outlined'
                  />
                  <Typography variant='caption' color='textDisabled'>
                    {getTimeAgo(resultData.created_at)}
                  </Typography>
                </Box>

                <ManageSearch color='inherit' />
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Badge>
  );
};
