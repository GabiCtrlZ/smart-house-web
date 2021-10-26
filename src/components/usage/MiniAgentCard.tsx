import React from 'react'
import { makeStyles } from '@mui/styles'
import acImg from '../../assets/icons/ac.png'
import lightImg from '../../assets/icons/light-bulb.png'

// types
interface Props {
  type: 'ac' | 'light',
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

const cardSize = '5vh'

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: `calc(${cardSize} / 2)`,
    width: `calc(${cardSize} * 2)`,
    cursor: 'pointer',
    justifyContent: 'space-between',
    height: `calc(${cardSize} * 2)`,
    boxShadow: '0px 0px 12px 1px rgb(199 207 239)',
    position: 'relative',
  },
  logo: {
    width: cardSize,
    height: cardSize,
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
}), { name: 'MiniAgentCard' })

const MiniAgentCard = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    type,
    on,
    onClick = () => { }, // eslint-disable-line
  } = props

  return (
    <div className={classes.root} onClick={onClick} >
      <img src={types[type].icon} alt={type} className={classes.logo} />
      {on && <div className={classes.onLight} />}
    </div>
  )
}

export default MiniAgentCard