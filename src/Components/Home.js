import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Fade from '../Fade'

const Home = ({ skill, activity, show }) => {

  return (
    <div className='mainContent'>
      <h1>Hey, I'm Zack McKenna</h1>
      <Fade show={show}>
        <aside>a {skill} who {activity}</aside>
      </Fade>
    </div>
  )
}

export default Home
