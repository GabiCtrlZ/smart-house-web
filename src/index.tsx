import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import AppProviders from './AppProviders'
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, REDIRECT_URI } from './consts'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={REDIRECT_URI || window.location.origin}
    >
      <AppProviders />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
