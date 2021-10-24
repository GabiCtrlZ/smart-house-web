import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useHistory } from 'react-router'
import homeImg from '../assets/icons/home.png'
import menuImg from '../assets/icons/menu.png'
import Image from './generic/Image'
import Menu from './Menu'

// style
const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: spacing(2),
    boxShadow: `0px 0px 0px 3px ${palette.background.default}`,
    zIndex: 10,
    background: palette.background.default,
  },
  logo: {
    display: 'flex',
    width: 30,
    height: 30,
    alignSelf: 'center',
    objectFit: 'cover',
  },
}), { name: 'NavBar' })

const NavBar = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={classes.root} >
        <IconButton onClick={() => history.push('/home')}>
          <Image src={homeImg} alt="home" size={30} />
        </IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <Image src={menuImg} alt="menu" size={30} />
        </IconButton>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default NavBar