import React from 'react'
import { Dialog } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

// types
interface Props {
  open: boolean,
}

const LoadingDialog = (props: Props): JSX.Element => {
  const {
    open,
  } = props

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <CircularProgress color="secondary" />
    </Dialog>
  )
}

export default LoadingDialog