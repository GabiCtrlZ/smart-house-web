import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import Loader from './generic/Loader'

// types
type Props = {
  label: string,
}

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1,
  },
  typography: {
    marginTop: spacing(3),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#646464',
    maxWidth: 400,
    '@media (min-width: 450px)': {
      maxWidth: 600,
    }
  },
}), { name: 'Loading' })

const Loading = ({ label }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Loader />
      <div className={classes.typography} >
        {label}
      </div>
    </div>
  )
}

export default Loading