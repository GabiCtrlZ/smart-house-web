import React from 'react'
import { makeStyles } from '@mui/styles'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Box } from '@mui/system'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

// type
interface Props {
  open: boolean,
  setOpen: (open: boolean) => void // eslint-disable-line
}

// style
const useStyles = makeStyles(() => ({
  box: {
    width: '50vw',
  },
}), { name: 'Menu' })

const Menu = ({ open, setOpen }: Props): JSX.Element => {
  const classes = useStyles()

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent): void => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(!open)
  }


  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box
        className={classes.box}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {['Home', 'All Agents', 'Rooms', 'Usage'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Something', 'Placeholder', 'Settings'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}

export default Menu