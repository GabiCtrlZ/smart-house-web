import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import ProtectedRoute from '../../ProtectedRoute'
import AgentCard from '../../components/home/AgentCard'

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  agentContainer: {
    display: 'flex',
    marginTop: 20,
    gap: 20,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}), { name: 'Agents' })

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

const Agents = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ProtectedRoute>
      <div className={classes.root} >
        <h2>All Agents</h2>
        <Typography variant="h3" >Agents which linked with SmartHouse</Typography>
        <div className={classes.agentContainer} >
          {agents.map(({ id, type, switched, on }) => (
            <AgentCard key={id} size={45} type={type} time={new Date(switched)} on={on} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Agents