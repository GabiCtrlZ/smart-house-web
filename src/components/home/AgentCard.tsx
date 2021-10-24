import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import acImg from '../../assets/icons/ac.png'
import lightImg from '../../assets/icons/light-bulb.png'
import secondsHours from '../../utils/seconds-hours'

// types
interface Props {
  size: number,
  type: 'ac' | 'light',
  time: Date,
  on: boolean,
  onClick?: () => void,
}

// converting types
const types = {
  ac: {
    name: 'Air Conditioner',
    icon: acImg,
  },
  light: {
    name: 'Light',
    icon: lightImg,
  },
}

// style
const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: 20,
    minWidth: 'max(45%, 162px)',
    cursor: 'pointer',
    justifyContent: 'space-between',
    height: '21vh',
    boxShadow: '0px 0px 5px 1px rgb(199 207 239)',
    position: 'relative',
  },
  logo: {
    width: ({ size }: { size: number }) => size,
    height: ({ size }: { size: number }) => size,
  },
  time: {
    fontSize: '0.8rem',
    color: palette.text.secondary,
  },
  onLight: {
    position: 'absolute',
    width: 8,
    height: 8,
    background: '#16d516',
    top: '17%',
    left: '80%',
    borderRadius: '50%',
  },
}), { name: 'AgentCard' })

const AgentCard = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    type,
    time,
    on,
    onClick = () => { }, // eslint-disable-line
  } = props

  return (
    <div className={classes.root} onClick={onClick} >
      <img src={types[type].icon} alt={type} className={classes.logo} />
      <div style={{ fontWeight: 'bold' }} >{types[type].name}</div>
      <div
        className={classes.time}
      >
        {on ? 'On' : 'Off'} for {secondsHours(Math.floor((new Date().getTime() - time.getTime()) / 1000))}
      </div>
      <div>
        <PowerSettingsNewIcon color={on ? 'warning' : 'disabled'} />
      </div>
      {on && <div className={classes.onLight} />}
    </div>
  )
}

export default AgentCard