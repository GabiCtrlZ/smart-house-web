import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#16d516',
      main: '#64d6bb',
    },
    secondary: {
      main: '#4385ff',
    },
    background: {
      default: 'rgb(226 230 247)',
      paper: 'rgb(255 255 255)',
    },
    warning: {
      main: '#fd6b67'
    },
    text: {
      primary: 'rgb(0 0 0)',
      secondary: '#778899',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Inter',
    ].join(','),
    h3: {
      color: '#778899',
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
  },
})

export default theme