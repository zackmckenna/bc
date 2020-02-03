import React, {useState, useEffect } from 'react';
import './App.css';
import { Box, Grid, Paper } from '@material-ui/core'
import Fade from './Fade'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [show, setShow] = useState(false)
  const [skill, setSkill] = useState('developer')
  const [activity, setActivity] = useState('is glad you are here')

  useEffect(() => {
    randomizeInfo()
  },[])

  const classes = useStyles();

  const activities = [
    'loves to bike all over Philly',
    'enjoys creative collaboration',
    'thinks summer is the best season',
    'plays a ton of boardgames',
    'spends a ton of time climbing',
    'has some awesome friends',
    'is always learning something new'
  ]

  const skills = [
    'developer',
    'sound engineer',
    'sound designer',
    'video designer',
    'game maker',
    'collaborator',
    'composer'
  ]

  const getRandomArrayElement = array => {
    console.log(array)
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomizeInfo = () => {
    setShow(show => !show)
    setTimeout(() => {
      setShow(show => !show)
    }, 4000)
    setTimeout(() => {
      const newSkill = getRandomArrayElement(skills)
      const newActivity = getRandomArrayElement(activities)
      setSkill(newSkill)
      setActivity(newActivity)
      randomizeInfo()
    }, 5000)
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>i'm zack mckenna</h1>
        <Fade show={show}>
          <h2>a <span style={{ color: '#5bc0de' }}>{skill}</span> who <span style={{ color: '#5cb85c' }}>{activity}</span></h2>
        </Fade>      </header>
      <div className='Education'>
        <h2>Education</h2>
        <h3>Arcadia University</h3>
        <h4>BA in Global Media and Philosophy</h4>

      </div>
      <div className='Experience'>
        <h2>Experience</h2>
        <h4>Full-time Audio/Video Engineer and Designer in the Philly theater scene since 2014.</h4>
        <h4>One national award and one Barrymore Nomination for Sound Design</h4>
        <h4>Audio Lead for 4 unique theaters</h4>
      </div>
    </div>
    </>
  );
}

export default App;
