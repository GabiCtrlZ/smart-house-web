import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RecoilRoot } from 'recoil'
import theme from './utils/theme'
import AuthProvider from './AuthProvider'


const AppProviders = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
        <AuthProvider />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default AppProviders