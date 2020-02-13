import React, {useState, useEffect } from 'react';
import './App.css';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Exploration from './components/Exploration'
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
  const [styles, setStyles] = useState({
    backgroundColor: {backgroundColor: '#e9e9e9' },
    navStyle: {
      padding: 0,
      margin: 0,
      position: 'absolute',
      top: 0,
      height: '40px',
      width: '100%',
      display: 'flex'
    },
    navItemStyle: {
      textAlign: 'center',
      flex: 1,
      listStyleType: 'none',
      padding: '10px'
    }
  })

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
    'sound engineer',
    'sound designer',
    'video designer',
    'game maker',
    'collaborator',
    'composer'
  ]

  const changeColor = () => {
    setStyles(styles => styles, styles.backgroundColor = {backgroundColor: '#343a40'})
  }

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

  // <Link to='/'>Home</Link>
  // <Link to='/about'>About</Link>
  // <Link to='/projects'>Projects</Link>
  // <Link to='/exploration'>Exploration</Link>

  return (
    <div style={styles.backgroundColor} className='App'>
      <div>
        <Router>
          <div>
            <header style={{...styles.backgroundColor , paddingTop: '2rem'}} >
              <Link style={{ color: '#444' }} to='/'>Home</Link>
              <Link style={{ color: '#444' }} to='/resume'>Resume</Link>
              {/* <Link style={{ color: '#444' }} to='/about'>About</Link> */}
              <Link style={{ color: '#444' }} to='/projects'>Projects</Link>
              {/* <button onClick={() => changeColor()}>Click me</button> */}
            </header>
            <div >
            <Switch>
              <Route exact path='/'>
                <Home show={show} skill={skill} activity={activity}/>
              </Route>
              <Route path='/exploration'>
                <Exploration />
              </Route>
              <Route path='/resume'>
                <Resume />
              </Route>
              <Route path='/about'>
                <About show={show} skill={skill} activity={activity}/>
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
            </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;