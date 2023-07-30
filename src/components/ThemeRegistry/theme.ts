import { createTheme } from '@mui/material/styles';

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
    background: {
      default: '#141414',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
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
