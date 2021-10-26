import React from 'react'
import { useRecoilValue } from 'recoil'
import { makeStyles } from '@mui/styles'
import { Theme, Typography } from '@mui/material'
import classNames from 'classnames'
import { useHistory } from 'react-router'
import AgentCard from '../../components/home/AgentCard'
import Summary from '../../components/home/Summary'
import UsageSummary from '../../components/home/UsageSummary'
import { agentsState } from '../../store'
import NoActiveAgents from '../../components/home/NoActiveAgents'

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

const Home = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  const agents = useRecoilValue(agentsState)

  return (
    <>
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
          {agents.filter(agent => agent.active).map(({ _id, type, switched, active }) => (
            <AgentCard
              key={_id}
              size={45}
              type={type}
              time={new Date(switched)}
              active={active}
              onClick={() => history.push(`/agent/${_id}`)}
            />
          ))}
          {!agents.filter(agent => agent.active).length && (
            <NoActiveAgents size={45} />
          )}
        </div>
        <UsageSummary size={45} units={456} />
      </div>
    </>
  )
}

export default Home