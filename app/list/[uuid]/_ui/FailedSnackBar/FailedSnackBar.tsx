import { Alert, Snackbar, type SnackbarCloseReason } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

interface LikedSnackBarProps {
  isSnackBar: boolean;
  setIsSnackBar: Dispatch<SetStateAction<boolean>>;
}

export const LikedSnackBar = ({ isSnackBar, setIsSnackBar }: LikedSnackBarProps) => {
  // 스낵바 핸들러
  const handleSnackBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackBar(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={isSnackBar}
      autoHideDuration={3000}
      onClose={handleSnackBarClose}
    >
      <Alert
        onClose={handleSnackBarClose}
        severity='error'
        variant='standard'
        sx={{ width: '100%' }}
      >
        이미 추천하셨어요!
      </Alert>
    </Snackbar>
  );
};
