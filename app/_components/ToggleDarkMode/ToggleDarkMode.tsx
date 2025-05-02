'use client';

import { useDarkModeStore } from '@/store/useDarkModeStore';
import { DarkMode, WbSunnyOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <IconButton
      aria-label='darkMode'
      color='inherit'
      onClick={toggleDarkMode}
      className='w-10 h-10 '
    >
      {darkMode ? <WbSunnyOutlined /> : <DarkMode />}
    </IconButton>
  );
};
