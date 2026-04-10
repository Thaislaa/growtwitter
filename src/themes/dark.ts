import { createTheme } from '@mui/material/styles'

export const dark = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#1D9BF0',
    },

    secondary: {
      main: '#1D9BF0',
    },

    background: {
      default: '#1f2227',
      paper: '#000000',
    },

    text: {
      primary: 'rgb(225, 225, 225)',
      secondary: '#989898',
    },

    divider: '#6a6464',
  },
})
