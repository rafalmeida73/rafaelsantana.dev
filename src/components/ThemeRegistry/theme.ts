import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#3bbbe8',
        },
        grey: {
          '900': '#363636',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#141414',
        },
        background: {
          default: '#141414',
        },
      },
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
