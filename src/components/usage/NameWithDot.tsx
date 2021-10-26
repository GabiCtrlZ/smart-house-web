import React from 'react'
import { makeStyles } from '@mui/styles'

// types
interface Props {
  color: string,
  name: string,
}

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '33%',
    justifyContent: 'center',
  },
  point: {
    width: 8,
    height: 8,
    borderRadius: '50%',
  },
  nameTag: {
    margin: '0 10px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '20vw',
  },
}), { name: 'NameWithDot' })

const NameWithDot = (props: Props): JSX.Element => {
  const {
    color,
    name,
  } = props
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <div className={classes.container} >
        <div className={classes.point} style={{ background: color }} />
        <div className={classes.nameTag} >
          {name}
        </div>
      </div>
    </div>
  )
}

export default NameWithDot