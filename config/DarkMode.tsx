'use client';

import { useDarkModeStore } from '@/store/useDarkModeStore';
import { useEffect } from 'react';

export const DarkMode = ({ children }: React.PropsWithChildren) => {
  const { darkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return <>{children}</>;
};
