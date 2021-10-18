import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(120,255,0)',
    },
    background: {
      default: 'rgb(245,246,250)',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Inter',
    ].join(','),
  },
})

export default theme