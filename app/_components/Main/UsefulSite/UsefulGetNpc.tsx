import { useGetNpc } from '@/hooks/api';
import { CardMedia } from '@mui/material';

export const UsefulGetNpc = ({ code }: { code: number }) => {
  const { data } = useGetNpc({ code });
  return (
    <CardMedia
      sx={{ width: 320, maxHeight: 120, objectFit: 'contain', objectPosition: 'center' }}
      component='img'
      height='140'
      image={data?.url}
      alt='site'
    />
  );
};
