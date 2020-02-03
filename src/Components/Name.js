import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { grey  } from '@material-ui/core/colors'

const useStyles = makeStyles({
  name: {
    color: grey,
  }
})
const Name = (props) => {
  const classes = useStyles()
  return (
    <h4 className={classes.name}>Zack McKenna</h4>
  )
}

export default Name
