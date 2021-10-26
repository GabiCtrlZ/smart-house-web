import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import './App.css'
import { Box } from '@mui/system'
import Home from './views/Home/Home'
import NavBar from './components/NavBar'
import Agents from './views/Agents/Agents'
import AgentPage from './views/AgentPage/AgentPage'
import Usage from './views/Usage/Usage'
import ErrorPage from './components/Error'
import Loading from './components/Loading'
import { AUDIENCE, SERVER_URL } from './consts'
import { tokenState } from './store'
import { agentsState } from './store/index'

const MainRouter = (): JSX.Element => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [token, setToken] = useRecoilState(tokenState)
  const setAgents = useSetRecoilState(agentsState)

  useEffect(() => {
    const callback = async (): Promise<void> => {
      try {
        if (isAuthenticated && !token) {
          const accessToken = await getAccessTokenSilently({
            scope: 'read:user',
            audience: AUDIENCE,
          })

          setToken(accessToken)
        }

        if (token) {
          const response = await fetch(`${SERVER_URL}/agents`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          const agents = await response.json()

          if (!agents.length) return setError(true)

          setIsLoading(false)
          setAgents(agents)
        }
      } catch (error) {
        setError(true)
      }
    }

    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, token])

  if (error) {
    return <ErrorPage error={new Error('It seems you dont have any data')} />
  }

  if (isLoading) {
    return <Loading label="Please wait while we fetch your agents" />
  }

  return (
    <Router>
      <Box sx={{ paddingLeft: 2, paddingRight: 2, maxWidth: 480 }} >
        <NavBar />
        <div >
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/agents" exact component={Agents} />
            <Route path="/agent/:id" exact component={AgentPage} />
            <Route path="/usage" exact component={Usage} />
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