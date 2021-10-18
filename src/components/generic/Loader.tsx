import React from 'react'
import { makeStyles } from '@mui/styles'

const animationDelays = [
  '0s',
  '-1.4285714286s',
  '-2.8571428571s',
  '-4.2857142857s',
  '-5.7142857143s',
  '-7.1428571429s',
  '-8.5714285714s',
  '-10s',
]

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loading: {
    position: 'relative',
    width: '96px',
    height: '96px',
    transform: 'rotate(45deg)',
    // animation: '$hue-rotate 10s linear infinite both',
  },
  loaderSquare: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '28px',
    height: '28px',
    margin: '2px',
    borderRadius: '2px',
    background: '#000', // #07a
    // backgroundImage: 'linear-gradient(45deg, #fa0 40%, #0c9 60%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    animation: '$square-animation 10s ease-in-out infinite both',
  },
  '@keyframes hue-rotate': {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: 'hue-rotate(360deg)',
    },
  },
  '@keyframes square-animation': {
    '0%': {
      left: '0',
      top: '0',
    },
    '10.5%': {
      left: '0',
      top: '0',
    },
    '12.5%': {
      left: '32px',
      top: '0',
    },
    '23%': {
      left: '32px',
      top: '0',
    },
    '25%': {
      left: '64px',
      top: '0',
    },
    '35.5%': {
      left: '64px',
      top: '0',
    },
    '37.5%': {
      left: '64px',
      top: '32px',
    },
    '48%': {
      left: '64px',
      top: '32px',
    },
    '50%': {
      left: '32px',
      top: '32px',
    },
    '60.5%': {
      left: '32px',
      top: '32px',
    },
    '62.5%': {
      left: '32px',
      top: '64px',
    },
    '73%': {
      left: '32px',
      top: '64px',
    },
    '75%': {
      left: '0',
      top: '64px',
    },
    '85.5%': {
      left: '0',
      top: '64px',
    },
    '87.5%': {
      left: '0',
      top: '32px',
    },
    '98%': {
      left: '0',
      top: '32px',
    },
    '100%': {
      left: '0',
      top: '0',
    },
  },
}), { name: 'Loader' })

function Loader(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.loading}>
        {animationDelays.map((e) => (
          <div key={e} className={classes.loaderSquare} style={{ animationDelay: e }} />
        ))}
      </div>
    </div>
  )
}

export default Loader
