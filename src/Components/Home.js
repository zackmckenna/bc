import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from '../Fade'

const Home = ({ textColor, skill, activity, show }) => {

  return (
    <div style={{ color: textColor, marginTop: '20vh' }} className='mainContent'>
      <h1 style={{textAlign: 'center'}}>Hey, I'm Zack McKenna</h1>
      <Fade show={show}>
        <aside style={{textAlign: 'center'}}>a {skill} who {activity}</aside>
      </Fade>
      <div style={{ marginTop: '1rem', justifyContent: 'center', display: 'flex'}}>
        <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://github.com/zackmckenna'><GitHubIcon /></a></div>
        <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://www.linkedin.com/in/zachary-mckenna-77912678/'><LinkedInIcon /></a></div>
        <div></div>
      </div>
    </div>
  )
}

export default Home
