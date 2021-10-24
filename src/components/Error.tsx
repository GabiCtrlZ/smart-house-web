import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import errorImg from '../assets/icons/error.png'

// types
type Props = {
  error: Error,
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
  img: {
    width: 130,
    '@media (min-width: 780px)': {
      width: 200,
    }
  },
  typography: {
    marginTop: spacing(),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#646464',
    maxWidth: 400,
    '@media (min-width: 450px)': {
      maxWidth: 600,
    }
  },
  typographyContainer: {
    marginTop: spacing(2),
  },
}), { name: 'Error' })

const Error = ({ error }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.img} src={errorImg} alt="error" />
      <div className={classes.typographyContainer} >
        <div className={classes.typography}>
          Something went wrong... {error.message}
        </div>
        <div className={classes.typography}>
          Sorry about that. Please try to refreshing the page and contact us if the problem persists.
        </div>
      </div>
    </div>
  )
}

export default Error