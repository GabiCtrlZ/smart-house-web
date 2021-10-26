import React from 'react'
import { useRecoilValue } from 'recoil'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { useHistory } from 'react-router'
import AgentCard from '../../components/home/AgentCard'
import { agentsState } from '../../store'

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
  const agents = useRecoilValue(agentsState)

  return (
    <>
      <div className={classes.root} >
        <h2>All Agents</h2>
        <Typography variant="h3" >Agents which linked with SmartHouse</Typography>
        <div className={classes.agentContainer} >
          {agents.map(({ _id, type, switched, active }) => (
            <AgentCard
              key={_id}
              size={45}
              type={type}
              time={new Date(switched)}
              active={active}
              onClick={() => history.push(`/agent/${_id}`)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Agents