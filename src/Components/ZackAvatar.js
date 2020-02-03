import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import profilePicture from "../static/images/avatar/profile.jpeg"

const useStyles = makeStyles({
  avatar: {
    marginRight:5
  }
})
const ZackAvatar = (props) => {
  const classes = useStyles();
  return (
    <Avatar className={classes.avatar} alt="Zack McKenna" src={profilePicture} />
  )
}

export default ZackAvatar
