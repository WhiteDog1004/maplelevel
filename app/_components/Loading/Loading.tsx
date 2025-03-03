import { Typography } from '@mui/material';
import Image from 'next/image';

export const Loading = () => {
  return (
    <div className='flex flex-col gap-1 items-center'>
      <Image width={50} height={40} src='/images/husky/husky_move.gif' alt='loading' />
      <Typography variant='caption' color='textDisabled'>
        불러오는 중...
      </Typography>
    </div>
  );
};
