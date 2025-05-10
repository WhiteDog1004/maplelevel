import { Box, Button, CardMedia, Typography } from '@mui/material';

export const ErrorCard = ({ refetch }: { refetch?: () => void }) => {
  return (
    <Box className='flex flex-col gap-1 w-full h-full justify-center items-center'>
      <CardMedia
        sx={{ width: '100%', height: 37, backgroundSize: 'contain' }}
        image={'/images/husky/cry_0.png'}
      />
      <Typography color='textDisabled' variant='caption'>
        불러오지 못했어요..
      </Typography>
      {refetch && (
        <Button variant='outlined' onClick={() => refetch()}>
          다시 불러오기
        </Button>
      )}
    </Box>
  );
};
