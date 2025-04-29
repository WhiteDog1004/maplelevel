import { Alert, Snackbar, type SnackbarCloseReason } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';

interface FailedSnackBarProps {
  isSnackBar: boolean;
  setIsSnackBar: Dispatch<SetStateAction<boolean>>;
}

export const FailedSnackBar = ({ isSnackBar, setIsSnackBar }: FailedSnackBarProps) => {
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
        작성되지 않은 부분이 있어요!
      </Alert>
    </Snackbar>
  );
};
