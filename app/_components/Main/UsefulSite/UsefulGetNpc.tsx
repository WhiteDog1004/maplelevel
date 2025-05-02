import { useGetNpc } from '@/hooks/api';
import { Box, CardMedia } from '@mui/material';

export const UsefulGetNpc = ({ code }: { code: number }) => {
  const { data, isPending } = useGetNpc({ code });
  return isPending ? (
    <Box width={320} height={120} />
  ) : (
    <CardMedia
      sx={{ width: 320, maxHeight: 120, objectFit: 'contain', objectPosition: 'center' }}
      component='img'
      height='140'
      image={data?.url}
      alt='site'
    />
  );
};
