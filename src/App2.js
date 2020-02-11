import React, {useState, useEffect } from 'react';
import './App.css';
import { Box, Grid, Paper } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ExtensionIcon from '@material-ui/icons/Extension';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

import Fade from './Fade'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Things from './components/Things'
import Blurb from './components/Blurb'
import Exploration from './components/Exploration'
import { Container } from '@material-ui/core'
import InfoBlurb from './components/InfoBlurb'
import Age from './components/Age'
import data from './services/data';
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [show, setShow] = useState(false)
  const [skill, setSkill] = useState('developer')
  const [activity, setActivity] = useState('is glad you are here')
  const [bikingData, setBikingData] = useState([])

  useEffect(() => {
    randomizeInfo()
    setBikingData(data.getStrava())
  },[])

  const getAge = dateString => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (age * 365).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const activities = [
    'loves to bike all over Philly',
    'enjoys creative collaboration',
    'thinks summer is the best season',
    'plays a ton of boardgames',
    'spends a ton of time climbing',
    'has some awesome friends',
    'is always learning something new',
    `has been on planet earth ${getAge('1991/7/14')} days`
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

  const largeColorArray = [
    {0:[
      '#5bc0de',
      '#5cb85c',
      '#282c34',
    ]}
  ]

  const smallColorArray = [
    '#5bc0de',
    '#5cb85c',
    '#282c34',
  ]

  const getRandomArrayElement = array => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomizeInfo = () => {
    setShow(show => !show)
    setTimeout(() => {
      setShow(show => !show)
    }, 4000)
    setTimeout(() => {
      const newSkillString = getRandomArrayElement(skills)
      const newActivityString = getRandomArrayElement(activities)
      setSkill(newSkillString)
      setActivity(newActivityString)
      randomizeInfo()
    }, 5000)
  }
  // const handleClick = async () => {
  //   console.log('clicked')
  //   const bikeData = await axios.get('https://guarded-ridge-39330.herokuapp.com/api/strava')
  //   console.log(bikeData)
  //   console.log(bikingData)
  //   setBikingData(bikeData)
  // }
  // const filterOutLastString = (array, lastString) => {
  //   console.log(skill)
  //   console.log(array.filter(currString => currString === lastString))
  // }

  return (
    <>
    <div className="App">
    {/* <AppBar style={{ backgroundColor: 'white' }}position='fixed'>
      <Toolbar>
        <Typography style={{ textColor: 'black' }}>
          Z
        </Typography>
      </Toolbar>
    </AppBar> */}
      <header className="App-header">
        <Container style={{ position: 'absolute' }} >
        <div id='name'>
          <h1 style={{ fontSize: '4vw' }}>I'm Zack Mckenna</h1>
        </div>
        <div id='infoBlurb'>
          <Fade show={show}>
            <h2 style={{ fontSize: '3vw' }}>a <span style={{ color: '#5bc0de' }}>{skill}</span> who <span style={{ color: '#5cb85c' }}>{activity}</span></h2>
          </Fade>
        </div>
        </Container>
      </header>
      <div id='blurb'>
        <Blurb />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='Education'>
        <Education />
      </div>
      <div>
        <Things />
      </div>
      <Router>
        <div>
          <nav>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'></Link>
            </li>
            <li>
              <Link to='/exploration'>Exploration</Link>
            </li>
          </nav>
          <Switch>
            <Route path='/exploration'>
              <Exploration />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    </>
  );
}

export default App;
