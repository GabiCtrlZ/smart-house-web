import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import secondsClock from '../../utils/seconds-clock'

// types
interface Props {
  acTime: Date,
  acNum: number,
  lightTime: Date,
  lightNum: number,
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
    width: '100%',
    justifyContent: 'space-around',
    height: '21vh',
    boxShadow: '0px 0px 5px 1px rgb(173 173 173)',
    position: 'relative',
  },
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  num: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  text: {
    color: palette.text.secondary,
    fontWeight: 'bold',
  },
  time: {
    color: '#16d516',
    fontWeight: 'bold',
    fontSize: '0.8rem',
  },
}), { name: 'Summary' })

const Summary = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    acNum,
    acTime,
    lightNum,
    lightTime,
  } = props

  const [realAcTime, setRealAcTime] = useState(Math.floor((new Date().getTime() - acTime.getTime()) / 1000))
  const [realLightTime, setRealLightTime] = useState(Math.floor((new Date().getTime() - lightTime.getTime()) / 1000))

  useEffect(() => {
    const interval = setInterval(
      () => {
        setRealAcTime((prev) => prev + 1)
        setRealLightTime((prev) => prev + 1)
      },
      1000
    )
 
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={classes.root} >
      <h3 style={{ margin: 0 }} >Evening Mode ON</h3 >
      <div className={classes.container} >
        <div className={classes.infoContainer} >
          <div className={classes.num} >{acNum}</div>
          <div className={classes.text} >Air conditioners</div>
          <div className={classes.time} >{secondsClock(realAcTime)}</div>
        </div>
        <div className={classes.infoContainer} >
          <div className={classes.num} >{lightNum}</div>
          <div className={classes.text} >House Lights</div>
          <div className={classes.time} >{secondsClock(realLightTime)}</div>
        </div>
      </div>
    </div>
  )
}

export default Summary