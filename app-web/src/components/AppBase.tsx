import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

// アプリケーションベース
export default function AppBase({children, lang}: {children: React.ReactNode, lang?: string | undefined}) {
  // テーマを作成する
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light'
    },
    typography: {
      fontSize: (lang && lang === 'ja') ? 12 : 14,
      fontFamily:  ['Noto Sans JP'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
