import React from 'react'
import { makeStyles } from '@mui/styles'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import TimerIcon from '@mui/icons-material/Timer'

// types
interface Props {
  isTimer?: boolean,
  on?: boolean,
  onClick?: () => void,
}

const mainButtonSize = 37

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: Math.floor(mainButtonSize / 2),
    width: mainButtonSize * 2,
    cursor: 'pointer',
    justifyContent: 'space-between',
    height: mainButtonSize * 2,
    boxShadow: '0px 0px 12px 1px rgb(199 207 239)',
    position: 'relative',
  },
}), { name: 'MainButton' })

const MainButton = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    on,
    isTimer,
    onClick = () => { }, // eslint-disable-line
  } = props

  let color: 'primary' | 'warning' | 'disabled' = 'primary'

  if (!isTimer) {
    color = on ? 'warning' : 'disabled'
  }

  const sx = { width: `${mainButtonSize}px`, height: `${mainButtonSize}px` }

  return (
    <div className={classes.root} onClick={onClick} >
      {!isTimer && <PowerSettingsNewIcon sx={sx} color={color} />}
      {isTimer && <TimerIcon sx={sx} color={color} />}
    </div>
  )
}

export default MainButton