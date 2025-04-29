import type { NoticeOptions } from '@/types/common';
import { Paper } from '@mui/material';

export const DetailContent = ({ post }: { post: NoticeOptions }) => {
  return (
    <Paper elevation={3} className='p-8 h-auto overflow-y-auto' sx={{ whiteSpace: 'pre-wrap' }}>
      {post.content}
    </Paper>
  );
};
