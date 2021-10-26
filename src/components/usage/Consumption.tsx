import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { CircularProgress, Theme } from '@mui/material'
import { Box } from '@mui/system'
import { useCountUp } from 'react-countup'

// types
interface Props {
  label: string,
  value: number,
  biggerThanHundred?: boolean,
  color: 'primary' | 'secondary',
  onClick?: () => void,
}

// consts

const size = 100

// helper
const returnCounter = (countUp: string | number, biggerThanHundred?: boolean): number => {
  const value = typeof countUp === 'string' ? parseInt(countUp, 10) : countUp

  return biggerThanHundred ? Math.floor((value * 100) / 650) : value
}

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'white',
    borderRadius: 18,
    padding: 20,
    minWidth: 'max(45%, 160px)',
    cursor: 'pointer',
    justifyContent: 'space-between',
    height: 'max(21vh, 163px)',
    boxShadow: '0px 0px 5px 1px rgb(199 207 239)',
    position: 'relative',
  },
  bottom: {
    color: 'gray',
  },
  top: {
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: spacing(),
  }
}), { name: 'Consumption' })

const Consumption = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    label,
    value,
    biggerThanHundred,
    color,
    onClick = () => { }, // eslint-disable-line
  } = props

  const { countUp, start } = useCountUp({
    start: 0,
    end: value,
    duration: 3,
  })

  useEffect(() => {
    start()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root} onClick={onClick} >
      <div className={classes.label} >{label}</div>
      <Box sx={{ position: 'relative', display: 'inline-flex' }} >
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={size}
          value={100}
          sx={{
            color: '#e1e1e1'
          }}
        />
        <CircularProgress
          variant="determinate"
          // disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          color={color}
          size={size}
          thickness={4}
          value={returnCounter(countUp, biggerThanHundred)}
        />
        <Box
          sx={{
            top: (size - 20) / 2,
            left: (size - 20) / 2,
            height: '20px',
            width: '20px',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} >
            {countUp}
          </Box>
          <Box sx={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'text.secondary' }} >
            Units
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Consumption