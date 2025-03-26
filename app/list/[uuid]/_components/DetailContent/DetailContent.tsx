import { ListDetailOptions } from '@/types/common';
import { Box, Typography } from '@mui/material';

export const DetailContent = ({ list }: ListDetailOptions) => {
  console.log(list.map_data);

  return (
    <Box>
      <Typography>{list.map_data[0].mobs}</Typography>
    </Box>
  );
};
