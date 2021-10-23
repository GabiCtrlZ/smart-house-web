import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import homeImg from '../assets/icons/home.png'
import menuImg from '../assets/icons/menu.png'
import Image from './generic/Image'
import Menu from './Menu'

// style
const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: spacing(2),
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={classes.root} >
        <Image src={homeImg} alt="home" size={30} />
        <Image src={menuImg} alt="menu" size={30} onClick={() => setOpen(true)} />
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default NavBar