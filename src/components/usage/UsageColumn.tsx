import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useCountUp } from 'react-countup'
import { Box } from '@mui/system'

// types
interface Props {
  height: number,
  secondaryColor: string,
  mainColor: string,
}

// style
const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '100px',
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: '50%',
  },
  line: {
    width: 10,
    borderRadius: 20,
  },
}), { name: 'UsageColumn' })

const UsageColumn = (props: Props): JSX.Element => {
  const {
    height,
    secondaryColor,
    mainColor,
  } = props
  const classes = useStyles()

  const { countUp, start } = useCountUp({
    start: 0,
    end: height,
    duration: 3,
  })

  useEffect(() => {
    start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.point} style={{ background: mainColor, position: 'absolute' }} />
      <Box className={classes.line} sx={{ background: secondaryColor, height: `${countUp}px` }} />
    </div>
  )
}

export default UsageColumn