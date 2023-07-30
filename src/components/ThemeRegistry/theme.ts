import { Inter } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const theme = createTheme({
  palette: {
    primary: {
      main: '#3bbbe8',
    },
    secondary: {
      main: '#494c7d',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: inter.variable,
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '2em',
          background: '#363636',
        },
      },
    },
  },
});

export default theme;
