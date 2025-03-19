import { Database } from '@/types_db';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { getTextByCode } from '@/utils/mapCode';
import { EXCHANGE_TYPE, ExchangeTypes } from '@/utils/recommendType';
import { Favorite, ManageSearch } from '@mui/icons-material';
import { Avatar, Badge, Box, Card, CardActionArea, Chip, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { getBadgeType } from './ListItemCard.const';

interface ListItemCardProps {
  data: Database['public']['Tables']['recommend-list']['Row'];
}

export const ListItemCard = ({ data }: ListItemCardProps) => {
  const searchParams = useSearchParams();
  const searchLevel = searchParams.get('level');
  const result = data.map_data.filter(
    (map) =>
      (map.level.min || 0) <= Number(searchLevel) && (map.level.max || 0) >= Number(searchLevel)
  );
  const resultData = searchLevel ? { ...data, map_data: result } : data;

  const highestMap = resultData.map_data.reduce((max, current) => {
    return (current.level.min || 0) > (max.level.min || 0) ? current : max;
  });

  const lowestMap = resultData.map_data.reduce((min, current) => {
    return (current.level.min || 0) < (min.level.min || 0) ? current : min;
  });

  const { data: minimap, refetch } = useQuery({
    queryKey: ['minimap', resultData.uuid],
    queryFn: async () => {
      const response = await fetch(`https://maplestory.io/api/gms/62/map/${lowestMap.map}/minimap`);

      return response;
    },
  });

  useEffect(() => {
    refetch();
  }, [lowestMap]);
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
          sx={{
            p: 2,
          }}
          className='flex flex-col gap-4 relative h-full'
        >
          <Typography maxWidth={200} noWrap color='textPrimary'>
            {data.title}
          </Typography>
          <Box className='flex flex-col gap-2'>
            <Box className='flex gap-4 items-center justify-between'>
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
              <Box className='flex flex-col text-end gap-4 min-w-24'>
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
                        ? Math.max(resultData.map_data[0].level.max || 0)
                        : Math.max(...resultData.map_data.map((item) => item.level.max || 0))}
                    </Typography>
                  </Box>
                </Box>
                <span
                  className={`${
                    getBadgeType[resultData.hunt_type as ExchangeTypes]
                  } justify-center`}
                >
                  <Typography variant='body2'>
                    {EXCHANGE_TYPE[resultData.hunt_type as ExchangeTypes]}
                  </Typography>
                </span>
              </Box>
            </Box>

            <Box className='flex flex-col gap-2'>
              <Box className='flex flex-col items-center gap-1'>
                {resultData.map_data.length <= 1 || searchLevel ? (
                  <Typography variant='body2'>
                    {getTextByCode(Number(lowestMap.map))?.kor?.split(':')[1]}
                  </Typography>
                ) : (
                  <Box className='flex flex-row items-center gap-1 max-w-60'>
                    <Typography noWrap variant='body2'>
                      {getTextByCode(Number(lowestMap.map))?.kor?.split(':')[1]}
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
                      {getTextByCode(Number(highestMap.map))?.kor?.split(':')[1]}
                    </Typography>
                  </Box>
                )}
                <Paper
                  className='flex justify-center items-center py-1 px-2'
                  sx={{ width: '100%' }}
                >
                  {lowestMap.caption ? (
                    <Typography
                      width='100%'
                      textAlign='center'
                      noWrap
                      variant='caption'
                      color='textSecondary'
                    >
                      {lowestMap.caption}
                    </Typography>
                  ) : (
                    <Typography variant='caption' color='textDisabled'>
                      설명 없음
                    </Typography>
                  )}
                </Paper>
              </Box>
              <Box className='flex justify-between items-center' color='GrayText'>
                <Box className='flex items-end gap-2'>
                  <Chip
                    sx={{
                      gap: 0.5,
                      maxWidth: 108,
                      color: 'GrayText',
                    }}
                    color='default'
                    size='small'
                    avatar={<Avatar alt='avatar' src='/images/mushroom.png' />}
                    label={
                      <Typography noWrap variant='caption'>
                        {data.user.nickname || '익명의 모험가'}
                      </Typography>
                    }
                    variant='outlined'
                  />
                  <Typography variant='caption' color='textDisabled'>
                    {dayjs(resultData.created_at).format('YY.MM.DD')}
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
