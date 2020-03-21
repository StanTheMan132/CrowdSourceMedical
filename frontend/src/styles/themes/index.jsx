
import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
    palette: {
      common: {
        white: '#FFF',
        black: '#161616'
      },
      type: 'dark',
      primary: {
        main: '#697bc1',
        dark: '#369e00',
        light: '#a3ff6e',
        contrastText: '#101010'
      },
      secondary: {
        main: '#363636',
        dark: '#101010',
        light: '#606060',
        contrastText: '#ffffff'
      }
    },
    typography: {
      fontFamily: [
        '"Abel"', '"Helvetica Neue"', '"Helvetica"', '"Arial"', 'sans-serif'
      ].join(',')
    }
  });
