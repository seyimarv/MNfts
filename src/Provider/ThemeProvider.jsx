import { useState, useMemo } from 'react';
import { createTheme, ThemeProvider as BaseThemeProvider } from '@mui/material';
import ThemeContext from '../Context/ThemeContext';
import getTheme from '../theme';
import { deepmerge } from '@mui/utils';

const CACHE_KEY = 'light';

const ThemeProvider = ({ children }) => {
  const prevMode = localStorage.getItem(CACHE_KEY);
  const [mode, setMode] = useState(() => {
    return prevMode === 'light' ? 'light' : 'dark';
  });
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          let currentMode = prevMode === 'dark' ? 'light' : 'dark';
          localStorage.setItem(CACHE_KEY, currentMode);
          return currentMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(deepmerge(getTheme(mode))), [mode]);

  return (
    <ThemeContext.Provider value={{ colorMode }}>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
