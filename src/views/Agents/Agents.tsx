import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { useHistory } from 'react-router'
import ProtectedRoute from '../../ProtectedRoute'
import AgentCard from '../../components/home/AgentCard'
import agents from '../../utils/agents'

// style
const useStyles = makeStyles(() => ({
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
    flexWrap: 'wrap',
  },
}), { name: 'Agents' })

const Agents = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <ProtectedRoute>
      <div className={classes.root} >
        <h2>All Agents</h2>
        <Typography variant="h3" >Agents which linked with SmartHouse</Typography>
        <div className={classes.agentContainer} >
          {agents.map(({ id, type, switched, on }) => (
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
      </div>
    </ProtectedRoute>
  )
}

export default Agents