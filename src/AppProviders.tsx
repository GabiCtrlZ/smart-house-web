import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import theme from './utils/theme'
import AuthProvider from './AuthProvider'


const AppProviders = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <RecoilRoot>
        <AuthProvider />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default AppProviders