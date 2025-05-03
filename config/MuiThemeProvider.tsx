'use client';
import { useDarkModeStore } from '@/store/useDarkModeStore';
import { ThemeProvider, createTheme } from '@mui/material';

export const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { darkMode } = useDarkModeStore();

  const theme = createTheme({
    typography: {
      fontFamily: 'pretendard, pretendard Fallback',
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
