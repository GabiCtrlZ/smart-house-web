import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Loading from './components/Loading'
import Main from './views/Main/Main'
import ErrorPage from './components/Error'

const MainRouter = (): JSX.Element => {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <ErrorPage error={error} />
  }

  if (isLoading) {
    return <Loading label="Please wait while we load" />
  }

  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default MainRouter