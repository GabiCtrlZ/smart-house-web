import React from 'react'
import { makeStyles } from '@mui/styles'
import UsageColumn from './UsageColumn'
import NameWithDot from './NameWithDot'

// style
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'white',
    borderRadius: 18,
    padding: 25,
    width: '100%',
    justifyContent: 'space-between',
    height: '35vh',
    boxShadow: '0px 0px 12px 1px rgb(199 207 239)',
    position: 'relative',
  },
  columnsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  namesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    rowGap: 10,
  },
  nameTag: {
    margin: '0 10px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
}), { name: 'UsageMeter' })

const columns = [
  {
    name: 'AC',
    mainColor: 'rgb(58, 129, 244)',
    secondaryColor: 'rgba(58, 129, 244, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
  {
    name: 'Lights',
    mainColor: 'rgb(94, 202, 247)',
    secondaryColor: 'rgba(94, 202, 247, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
  {
    name: 'Boiler',
    mainColor: 'rgb(105, 227, 196)',
    secondaryColor: 'rgba(105, 227, 196, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
  {
    name: 'Blinds',
    mainColor: 'rgb(91, 167, 193)',
    secondaryColor: 'rgba(91, 167, 193, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
  {
    name: 'Fans',
    mainColor: 'rgb(171, 245, 96)',
    secondaryColor: 'rgba(171, 245, 96, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
  {
    name: 'Others',
    mainColor: 'rgb(176, 181, 58)',
    secondaryColor: 'rgba(176, 181, 58, 0.5)',
    height: Math.floor(Math.random() * 95) + 5,
  },
]

const UsageMeter = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <h3 style={{ margin: 0 }} >Usage Meter</h3 >
      <div className={classes.columnsContainer} >
        {columns.map((column) => (
          <UsageColumn key={column.name} {...column} />
        ))}
      </div>
      <div className={classes.namesContainer} >
        {columns.map((column) => (
          <NameWithDot key={column.name} name={column.name} color={column.mainColor} />
        ))}
      </div>
    </div>
  )
}

export default UsageMeter