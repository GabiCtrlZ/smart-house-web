import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import MainRouter from './MainRouter'
import ProtectedRoute from './ProtectedRoute'
import ErrorPage from './components/Error'
import Loading from './components/Loading'


const AuthProviders = (): JSX.Element => {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <ErrorPage error={error} />
  }

  if (isLoading) {
    return <Loading label="Please wait while we load" />
  }

  return (
    <ProtectedRoute >
      <MainRouter />
    </ProtectedRoute>
  )
}

export default AuthProviders