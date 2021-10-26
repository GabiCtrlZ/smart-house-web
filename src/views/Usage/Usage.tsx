import React from 'react'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router'
import classNames from 'classnames'
import { Theme } from '@mui/material'
import ProtectedRoute from '../../ProtectedRoute'
import Consumption from '../../components/usage/Consumption'
import UsageMeter from '../../components/usage/UsageMeter'
import agents from '../../utils/agents'
import MiniAgentCard from '../../components/usage/MiniAgentCard'

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
  container: {
    flexWrap: 'wrap',
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
    gap: 30,
    marginTop: 0,
  },
  subHeader: {
    margin: '10px 0px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}), { name: 'Usage' })


const Usage = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <ProtectedRoute>
      <div className={classes.root} >
        <h2>Electricity Usage</h2>
        <div className={classNames(classes.agentContainer, classes.container)} >
          <Consumption label="Todays Usage" value={26} color="primary" />
          <Consumption label="Overall Usage" value={467} biggerThanHundred={467 > 100} color="secondary" />
        </div>
        <div className={classNames(classes.agentContainer, classes.container)} >
          <UsageMeter />
        </div>
        <div className={classes.subHeader} >All Agents</div>
        <div className={classNames(classes.agentContainer, classes.agentFlow)} >
          {agents.map(({ id, type, on }) => (
            <MiniAgentCard
              key={id}
              type={type}
              on={on}
              onClick={() => history.push(`/agent/${id}`)}
            />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Usage