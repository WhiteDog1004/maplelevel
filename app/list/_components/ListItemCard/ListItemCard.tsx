import { Database } from '@/types_db';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { getTextByCode } from '@/utils/mapCode';
import { EXCHANGE_TYPE, ExchangeTypes } from '@/utils/recommendType';
import { ManageSearch, ThumbUp } from '@mui/icons-material';
import { Avatar, Badge, Box, Card, CardActionArea, Chip, Tooltip, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import { getBadgeType } from './ListItemCard.const';

interface ListItemCardProps {
  data: Database['public']['Tables']['recommend-list']['Row'];
}

export const ListItemCard = ({ data }: ListItemCardProps) => {
  const highestMap = data.map_data.reduce((max, current) => {
    return (current.level.min || 0) > (max.level.min || 0) ? current : max;
  });

  const lowestMap = data.map_data.reduce((min, current) => {
    return (current.level.min || 0) < (min.level.min || 0) ? current : min;
  });

  const { data: minimap } = useQuery({
    queryKey: ['minimap', data.uuid],
    queryFn: async () => {
      const response = await fetch(`https://maplestory.io/api/gms/62/map/${lowestMap.map}/minimap`);

      return response;
    },
  });

  return (
    <Badge
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      color={data.like > 5 ? 'error' : 'info'}
      className='w-max'
      badgeContent={
        <Box className='flex justify-center items-center gap-1'>
          <ThumbUp className='text-white size-5' fontSize='inherit' />
          <Typography variant='body2' className='text-white'>
            {data.like || '0'}
          </Typography>
        </Box>
      }
    >
      <Tooltip
        title={lowestMap.caption}
        followCursor
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 16],
                },
              },
            ],
          },
        }}
      >
        <Card variant='outlined' sx={{ width: 280 }}>
          <CardActionArea
            sx={{
              p: 2,
            }}
            className='flex flex-col gap-4 relative'
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
                        레벨 : {Math.min(...data.map_data.map((item) => item.level.min || 0))}
                      </Typography>
                      ~
                      <Typography
                        sx={{
                          lineHeight: 1,
                        }}
                        variant='caption'
                        color='textDisabled'
                      >
                        {Math.max(...data.map_data.map((item) => item.level.max || 0))}
                      </Typography>
                    </Box>
                  </Box>
                  <span
                    className={`${getBadgeType[data.hunt_type as ExchangeTypes]} justify-center`}
                  >
                    <Typography variant='body2'>
                      {EXCHANGE_TYPE[data.hunt_type as ExchangeTypes]}
                    </Typography>
                  </span>
                </Box>
              </Box>

              <Box className='flex flex-col gap-2'>
                <Box className='flex flex-col items-center gap-2'>
                  {data.map_data.length <= 1 ? (
                    <Typography variant='body2'>
                      {getTextByCode(Number(lowestMap.map))?.kor?.split(':')[1]}
                    </Typography>
                  ) : (
                    <Box className='flex flex-row items-center gap-1 max-w-60'>
                      <Typography noWrap variant='body2'>
                        {getTextByCode(Number(lowestMap.map))?.kor?.split(':')[1]}
                      </Typography>
                      <Typography variant='caption'>~</Typography>
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
                      {dayjs(data.created_at).format('YY.MM.DD')}
                    </Typography>
                  </Box>

                  <ManageSearch color='inherit' />
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </Tooltip>
    </Badge>
  );
};
