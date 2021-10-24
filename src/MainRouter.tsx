import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import { Box } from '@mui/system'
import Loading from './components/Loading'
import Home from './views/Home/Home'
import ErrorPage from './components/Error'
import NavBar from './components/NavBar'
import Agents from './views/Agents/Agents'

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
      <Box sx={{ paddingLeft: 2, paddingRight: 2, maxWidth: 480 }} >
        <NavBar />
        <div >
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/agents" exact component={Agents} />
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </Box>
    </Router>
  )
}

export default MainRouter