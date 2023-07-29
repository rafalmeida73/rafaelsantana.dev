'use client';

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

// eslint-disable-next-line import-helpers/order-imports
import { ThemeProvider } from '@mui/material/styles';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
