import type { NoticeOptions } from '@/types/common';
import { Avatar, Divider, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const DetailTitle = ({ post }: { post: NoticeOptions }) => {
  return (
    <Stack gap={2} width='100%'>
      <Typography variant='h5'>{post.title}</Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' gap={1}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Avatar src={post.writer.avatar_url} />
          <Typography>{post.writer.nickname}</Typography>
        </Stack>
        <Typography variant='body2'>작성일: {dayjs(post.created_at).format('YY-MM-DD')}</Typography>
      </Stack>
      <Divider />
    </Stack>
  );
};
