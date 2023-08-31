'use client';

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

// eslint-disable-next-line import-helpers/order-imports
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
