import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, Typography } from '@mui/material'
import classNames from 'classnames'
import ProtectedRoute from '../../ProtectedRoute'
import AgentCard from '../../components/home/AgentCard'
import Summary from '../../components/home/Summary'
import UsageSummary from '../../components/home/UsageSummary'

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  agentContainer: {
    display: 'flex',
    marginTop: 20,
    gap: 20,
    justifyContent: 'space-between',
  },
  agentFlow: {
    overflowX: 'scroll',
    padding: `5px ${spacing(2)}`,
    width: '100vw',
    transform: `translateX(-${spacing(2)})`,
  },
  subHeaderContainer: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  subHeader: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  seeAll: {
    color: '#4385ff',
    cursor: 'pointer',
  },
}), { name: 'Menu' })

const Home = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ProtectedRoute>
      <div className={classes.root} >
        <h2>Good evening Gabi!</h2>
        <Typography variant="h3" >Welcome home</Typography>
        <div className={classes.agentContainer} >
          <Summary acNum={1} acTime={new Date('2021-10-23')} lightNum={3} lightTime={new Date()} />
        </div>
        <div className={classes.subHeaderContainer} >
          <div className={classes.subHeader} >Running appliances</div>
          <div className={classNames(classes.subHeader, classes.seeAll)} >See All</div>
        </div>
        <div className={classNames(classes.agentContainer, classes.agentFlow)} >
          <AgentCard size={45} type="ac" time={new Date('2021-10-23T06:34:00.000Z')} />
          <AgentCard size={45} type="light" time={new Date('2021-10-23')} />
          <AgentCard size={45} type="ac" time={new Date('2021-10-23')} />
        </div>
        <UsageSummary acNum={1} acTime={new Date('2021-10-23')} lightNum={3} lightTime={new Date()} />
      </div>
    </ProtectedRoute>
  )
}

export default Home