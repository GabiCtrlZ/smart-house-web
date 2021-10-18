import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from './components/Loading'
type Props = {
  children: JSX.Element | JSX.Element[],
}
const ProtectedRoute = ({ children }: Props): JSX.Element => (<>{children}</>)

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => (<Loading label="Redirecting you to the login page..." />)
})