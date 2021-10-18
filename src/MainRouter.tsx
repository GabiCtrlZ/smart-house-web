import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
// import Loading from './components/Loading'
import Main from './views/Main/Main'

const MainRouter = (): JSX.Element => {
  // if (isLoading) {
  //   return <Loading />
  // }

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