import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(120,255,0)',
    },
    background: {
      default: 'rgb(226 230 247)',
      paper: 'rgb(255 255 255)',
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
      fontSize: '1.17em',
      fontWeight: 'bold',
    },
  },
})

export default theme