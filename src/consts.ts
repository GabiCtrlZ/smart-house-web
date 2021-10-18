const {
  REACT_APP_AUTH0_DOMAIN: AUTH0_DOMAIN = '',
  REACT_APP_AUTH0_CLIENT_ID: AUTH0_CLIENT_ID = '',
  REACT_APP_REDIRECT_URI: REDIRECT_URI,
} = process.env

export {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  REDIRECT_URI,
}