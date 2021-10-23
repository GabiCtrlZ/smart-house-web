import React from 'react'
import { makeStyles } from '@mui/styles'

// types
interface Props {
  size: number,
  src: string,
  alt: string,
  onClick?: () => void,
}

// style
const useStyles = makeStyles(() => ({
  logo: {
    display: 'flex',
    width: ({ size }: { size: number }) => size,
    height: ({ size }: { size: number }) => size,
    alignSelf: 'center',
    objectFit: 'cover',
    cursor: 'pointer',
  },
}), { name: 'Image' })

const Image = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  const {
    src,
    alt,
    onClick = () => { }, // eslint-disable-line
  } = props

  return (
    <img src={src} alt={alt} className={classes.logo} onClick={onClick} />
  )
}

export default Image