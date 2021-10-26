import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { useHistory } from 'react-router'
import greenHouseImage from '../../assets/icons/green-house.png'
import saveMoneyImg from '../../assets/icons/save-money.png'

// types
interface Props {
  size: number,
}

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    width: '100%',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'space-between',
    height: '21vh',
    boxShadow: '0px 0px 12px 1px rgb(199 207 239)',
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
}), { name: 'NoActiveAgents' })

const NoActiveAgents = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const history = useHistory()

  return (
    <div className={classes.root} >
      <div className={classes.rowContainer} >
        <Box sx={{ display: 'flex' }} >
          <img src={greenHouseImage} alt="green-house" className={classes.logo} />
          <Box sx={{ marginLeft: 1 }} className={classes.textContainer} >
            <Box sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} >Great job!</Box>
            <Box sx={{ fontSize: '0.8rem', color: 'text.secondary' }} >Seems like nothing is active</Box>
          </Box>
        </Box>
      </div>
      <div className={classes.rowContainer} >
        <Box sx={{ display: 'flex' }} >
          <img src={saveMoneyImg} alt="save-money" className={classes.logo} />
          <Box sx={{ marginLeft: 1 }} className={classes.textContainer} >
            <Box
              sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'text.secondary' }}
            >
              Its a great way to save money
            </Box>
            <Box sx={{ fontWeight: 'bold', fontSize: '0.8rem', color: 'primary.main' }} >Go to agents to view them</Box>
          </Box>
        </Box>
        <IconButton onClick={() => history.push('/agents')}>
          <AddIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
    </div>
  )
}

export default NoActiveAgents