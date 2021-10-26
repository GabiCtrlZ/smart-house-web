import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Button, Theme } from '@mui/material'
import { useHistory } from 'react-router'
import ccMachineImg from '../../assets/icons/cc-machine.png'
import billImg from '../../assets/icons/bill.png'

// types
interface Props {
  units: number,
  size: number,
}

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'space-between',
    height: '20vh',
    boxShadow: '0px 0px 12px 1px rgb(199 207 239)',
    position: 'relative',
    marginTop: spacing(2),
  },
  logo: {
    width: ({ size }: { size: number }) => size,
    height: ({ size }: { size: number }) => size,
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}), { name: 'UsageSummary' })

const UsageSummary = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const history = useHistory()
  const {
    units,
  } = props

  return (
    <div className={classes.root} >
      <div className={classes.rowContainer} >
        <Box sx={{ display: 'flex' }} >
          <img src={ccMachineImg} alt="cc-machine" className={classes.logo} />
          <Box sx={{ marginLeft: 1 }} className={classes.textContainer} >
            <Box sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} >November 10 Bill</Box>
            <Box sx={{ fontSize: '0.8rem', color: 'text.secondary' }} >Due in: 15 days</Box>
          </Box>
        </Box>
        <Box sx={{ alignItems: 'center' }} className={classes.textContainer} >
          <Box sx={{ fontWeight: 'bold', fontSize: '1.25rem' }} >{units}</Box>
          <Box sx={{ fontSize: '0.65rem', color: 'text.secondary' }}>Units</Box>
        </Box>
      </div>
      <div className={classes.rowContainer} >
        <Box sx={{ display: 'flex' }} >
          <img src={billImg} alt="bill" className={classes.logo} />
          <Box sx={{ marginLeft: 1 }} className={classes.textContainer} >
            <Box sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'text.secondary' }} >Estimated bill: </Box>
            <Box sx={{ fontWeight: 'bold', fontSize: '0.8rem', color: 'primary.main' }} >400 ₪</Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ fontWeight: 'bold' }}
          onClick={() => history.push('/usage')}
        >
          View Usage
        </Button>
      </div>
    </div>
  )
}

export default UsageSummary