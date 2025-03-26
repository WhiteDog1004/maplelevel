import { ListDetailOptions } from '@/types/common';
import { getClassImages, getLabelByJobs } from '@/utils/jobs';
import { Favorite } from '@mui/icons-material';
import { Avatar, Box, Chip, Divider, IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';

export const DetailTitle = ({ list }: ListDetailOptions) => {
  return (
    <Box className='flex gap-4 justify-between items-end w-full'>
      <Box className='flex flex-col gap-8 w-10/12'>
        <Box className='flex flex-col gap-1'>
          <Typography noWrap variant='h4'>
            {list.title}
          </Typography>
          <Box className='flex items-center gap-2'>
            <Image
              width={20}
              height={20}
              unoptimized
              src={`/images/class/${getClassImages(getLabelByJobs(list.job)?.id || 0)}.webp`}
              alt='class'
            />
            <Typography variant='body1'>{getLabelByJobs(list.job)?.label}</Typography>
            <Divider flexItem variant='middle' orientation='vertical' />
            <Box className='flex gap-1 items-center justify-end'>
              <Typography variant='body1'>
                레벨 : {Math.min(...list.map_data.map((item) => item.level.min || 0))}
              </Typography>
              <Typography variant='caption' color='textDisabled'>
                ~
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1,
                }}
                variant='body1'
              >
                {Math.max(...list.map_data.map((item) => item.level.max || 0))}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className='flex items-end gap-2'>
          <Chip
            sx={{
              gap: 0.5,
              width: 'max-content',
              maxWidth: 150,
            }}
            color='default'
            size='medium'
            avatar={<Avatar alt='avatar' src={list.user.avatar_url || '/images/mushroom.png'} />}
            label={
              <Typography noWrap variant='caption'>
                {list.user.nickname || '익명의 모험가'}
              </Typography>
            }
            variant='outlined'
          />
          <Typography color='textDisabled'>{dayjs(list.created_at).format('YY.MM.DD')}</Typography>
        </Box>
      </Box>
      <Box className='flex items-center gap-1'>
        <Typography>{list.like || 0}</Typography>
        <IconButton>
          <Favorite />
        </IconButton>
      </Box>
    </Box>
  );
};
