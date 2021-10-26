import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { makeStyles } from '@mui/styles'
import { Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useHistory } from 'react-router'
import acImg from '../../assets/icons/ac.png'
import lightImg from '../../assets/icons/light-bulb.png'
import offAcImg from '../../assets/icons/off-ac.png'
import offLightImg from '../../assets/icons/off-light-bulb.png'
import MainButton from '../../components/agentPage/MainButton'
import secondsClock from '../../utils/seconds-clock'
import { agentsState } from '../../store'

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    animationName: 'fadeIn',
    animationDuration: '0.5s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in-out',
    height: 'calc(100vh - 62px)',
    justifyContent: 'space-between',
    padding: spacing(),
  },
  logo: {
    width: 'min(204px, 50vw)',
    height: 'min(204px, 50vw)',
    alignSelf: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    minWidth: 285,
  },
}), { name: 'AgentPage' })

// converting types
const types = {
  ac: {
    name: 'Air Conditioner',
    image: acImg,
    offImage: offAcImg,
  },
  light: {
    name: 'Light',
    image: lightImg,
    offImage: offLightImg,
  },
}

const AgentPage = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  const agents = useRecoilValue(agentsState)
  const id = window.location.pathname.split('/')[2]
  const agent = agents.find(a => a._id === id)

  const switched = agent ? agent.switched : new Date().toISOString()

  const time = new Date(switched)
  const [realTime, setRealTime] = useState(Math.floor((new Date().getTime() - time.getTime()) / 1000))

  useEffect(() => {
    const interval = setInterval(
      () => {
        setRealTime((prev) => prev + 1)
      },
      1000
    )

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!agent) {
    return (
      <>
        <Typography>Agent not found</Typography>
      </>
    )
  }

  return (
    <>
      <div className={classes.root} >
        <Box >
          <h2>{agent.room}</h2>
          <Typography variant="h3" >{types[agent.type].name}</Typography>
        </Box>
        <img
          src={agent.active ? types[agent.type].image : types[agent.type].offImage}
          alt={agent.type} className={classes.logo}
        />
        <div className={classes.buttonsContainer} >
          <MainButton isTimer onClick={() => history.push(`/timer/${id}`)} />
          <Box sx={{ fontWeight: 'bold', width: '110px' }} >Power Saving Mode</Box>
          <MainButton active={agent.active} />
        </div>
        <Box sx={{ marginBottom: 2 }} >
          <Box sx={{ fontWeight: 'bold', }}>{agent.active ? 'On' : 'Off'} for the last</Box>
          <Box sx={{ color: 'secondary.main', fontWeight: 'bold', fontSize: '1.1rem' }} >
            {secondsClock(realTime)}
          </Box>
          <Box
            sx={{ marginBottom: '10px', marginTop: '10px', fontSize: '0.8rem', color: 'text.secondary' }}
          >
            Save more on {types[agent.type].name} by using our timer settings
          </Box>
        </Box>
      </div>
    </>
  )
}

export default AgentPage