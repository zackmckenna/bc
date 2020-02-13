import React, {useState, useEffect } from 'react';
import './App.css';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Exploration from './components/Exploration'
import 'react-awesome-slider/dist/styles.css'
import { Button } from 'react-bootstrap'

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
  const [backgroundColor, setBackGroundColor] = useState('#e9e9e9')
  const [textColor, setTextColor] = useState('#444')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    randomizeInfo()
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
    'audio engineer',
    'sound designer',
    'video designer',
    'game maker',
    'collaborator',
    'composer'
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

  const changeColor = (newBackgroundColor, newTextColor) => {
    setBackGroundColor(newBackgroundColor)
    setTextColor(newTextColor)
  }

  const toggleDarkMode = () => {
    console.log('clicked')
    setDarkMode(!darkMode)
    !darkMode ? changeColor('#343a40','#d1d1d1') : changeColor('#e9e9e9', '#444')
  }

  // const colorArray = [
  //   {background: '#ff595f', text:'#5fff59'},
  //   {background: , text: }
  //   []
  // ]

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

  // <Link to='/'>Home</Link>
  // <Link to='/about'>About</Link>
  // <Link to='/projects'>Projects</Link>
  // <Link to='/exploration'>Exploration</Link>

  return (
    <div style={{ backgroundColor: backgroundColor }} className='App'>
      <div style={{ backgroundColor: backgroundColor }}>
        <Router>
            <header style={{ textColor: textColor, backgroundColor: backgroundColor, paddingTop: '2rem'}} >
              <Link style={{ color: textColor }} to='/bc'>Home</Link>
              <Link style={{ color: textColor }} to='/resume'>Resume</Link>
              {/* <Link style={{ color: '#444' }} to='/about'>About</Link> */}
              <Link style={{ color: textColor }} to='/projects'>Projects</Link>
              <Button className='btn-sm' variant={darkMode ? 'light' : 'dark' } onClick={() => toggleDarkMode()}>{darkMode ? 'Light' : 'Dark'} Mode</Button>
            </header>
            <Switch>
              <Route exact path='/bc'>
                <Home textColor={textColor} show={show} skill={skill} activity={activity}/>
              </Route>
              <Route path='/exploration'>
                <Exploration />
              </Route>
              <Route path='/resume'>
                <Resume backgroundColor={backgroundColor} textColor={textColor}/>
              </Route>
              <Route path='/about'>
                <About backgroundColor={backgroundColor} textColor={textColor} show={show} skill={skill} activity={activity}/>
              </Route>
              <Route path='/projects'>
                <Projects backgroundColor={backgroundColor} textColor={textColor}/>
              </Route>
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;