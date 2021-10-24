import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, Typography } from '@mui/material'
import classNames from 'classnames'
import { useHistory } from 'react-router'
import ProtectedRoute from '../../ProtectedRoute'
import AgentCard from '../../components/home/AgentCard'
import Summary from '../../components/home/Summary'
import UsageSummary from '../../components/home/UsageSummary'

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    animationName: 'fadeIn',
    animationDuration: '0.5s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in-out',
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
    width: 'min(100vw, 480px)',
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
}), { name: 'Home' })

// dummy state
type agentType = {
  id: string,
  type: 'ac' | 'light',
  room: string,
  on: boolean,
  switched: string,
}

const agents: agentType[] = [
  {
    id: '1',
    type: 'ac',
    room: '1',
    on: true,
    switched: '2021-10-24T07:14:00.000Z',
  },
  {
    id: '2',
    type: 'light',
    room: '1',
    on: true,
    switched: '2021-10-24T07:17:00.000Z',
  },
  {
    id: '3',
    type: 'ac',
    room: '2',
    on: true,
    switched: '2021-10-24T08:29:00.000Z',
  },
  {
    id: '4',
    type: 'light',
    room: '2',
    on: false,
    switched: '2021-10-23T06:34:00.000Z',
  },
]

const Home = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()

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
          <div
            className={classNames(classes.subHeader, classes.seeAll)}
            onClick={() => history.push('/agents')}
          >
            See All
          </div>
        </div>
        <div className={classNames(classes.agentContainer, classes.agentFlow)} >
          {agents.filter(agent => agent.on).map(({ id, type, switched, on }) => (
            <AgentCard
              key={id}
              size={45}
              type={type}
              time={new Date(switched)}
              on={on}
              onClick={() => history.push(`/agent/${id}`)}
            />
          ))}
        </div>
        <UsageSummary size={45} units={456} />
      </div>
    </ProtectedRoute>
  )
}

export default Home