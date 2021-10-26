import React from 'react'
import { Dialog } from '@mui/material'
import Loader from '../generic/Loader'

// types
interface Props {
  open: boolean,
}

const LoadingDialog = (props: Props): JSX.Element => {
  const {
    open,
  } = props

  return (
    <Dialog open={open} >
      <Loader style={{ margin: 45 }} />
    </Dialog>
  )
}

export default LoadingDialog