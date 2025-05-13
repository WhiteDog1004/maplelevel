import { Avatar, Stack, Typography } from '@mui/material';
import type { User } from '@supabase/supabase-js';

interface MypageInfoProps {
  user: User;
}

export const MypageInfo = ({ user }: MypageInfoProps) => {
  return (
    <Stack gap={1} alignItems='center'>
      <Avatar
        sx={{ width: 56, height: 56 }}
        src={user.user_metadata.avatar_url || '/images/mushroom.png'}
        alt='profile'
      />
      <Stack alignItems='center'>
        <Typography>{user.user_metadata.custom_claims.global_name}</Typography>
        <Typography textAlign='center' color='textDisabled' variant='caption'>
          어서오세요!
          <br />
          오늘도 방문해주셔서 감사합니다!
        </Typography>
      </Stack>
    </Stack>
  );
};
