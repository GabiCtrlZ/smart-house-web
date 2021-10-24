import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import ccMachineImg from '../../assets/icons/cc-machine.png'
import billImg from '../../assets/icons/bill.png'

// types
interface Props {
  units: number,
  size: number,
}

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'space-between',
    height: '21vh',
    boxShadow: '0px 0px 5px 1px rgb(173 173 173)',
    position: 'relative',
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
}), { name: 'AgentCard' })

const AgentCard = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    units,
  } = props

  return (
    <div className={classes.root} >
      <div className={classes.rowContainer} >
        <Box sx={{ display: 'flex' }} >
          <img src={ccMachineImg} alt="cc-machine" className={classes.logo} />
          <Box sx={{ marginLeft: 1 }} className={classes.textContainer} >
            <Box sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} >January 19 Bill</Box>
            <Box sx={{ fontSize: '0.8rem', color: 'text.secondary' }} >Due in: 6 days</Box>
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
        <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold' }} >View Usage</Button>
      </div>
    </div>
  )
}

export default AgentCard