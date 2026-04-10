import { createTheme } from '@mui/material/styles'

export const light = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#1D9BF0',
    },

    secondary: {
      main: '#3a8ec6',
    },

    background: {
      default: '#F2F2F2',
      paper: '#FFFFFF',
    },

    text: {
      primary: 'rgb(51, 51, 51)',
      secondary: 'rgb(150, 149, 149)',
    },

    divider: '#E9E9E9',
  },
})
