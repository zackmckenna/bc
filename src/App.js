import React, {useState, useEffect } from 'react';
import './App.css';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Home from './components/Home'
import Sandbox from './components/SandBox'
import About from './components/About'
import Exploration from './components/Exploration'
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga'

import 'react-awesome-slider/dist/styles.css'
import { Button } from 'react-bootstrap'
import BackgroundColor from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const history = createBrowserHistory()

const trackingId = "UA-22402465-2"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  const [show, setShow] = useState(false)
  const [skill, setSkill] = useState('developer')
  const [activity, setActivity] = useState('is glad you are here')
  const [backgroundColor, setBackGroundColor] = useState('#e9e9e9')
  const [textColor, setTextColor] = useState('#444')
  const [darkMode, setDarkMode] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)
  const [funMode, setFunMode] = useState(false)
  const [funCount, setFunCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
      setTimeout(() => {
        randomizeInfo()
      }, 1)
    } else {
        randomizeInfo()
      }
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
    'really enjoys gardening',
    'lives with a cat named carl',
    'lives with a snake named salsa',
    'enjoys creative collaboration',
    'thinks summer is the best season',
    'plays a ton of boardgames',
    'spends a lot of time climbing',
    'has some awesome friends',
    `has been on planet earth ${getAge('1991/7/14')} days`
  ]

  const skills = [
    'developer',
    'sound engineer',
    'sound designer',
    'projection designer',
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
    setDarkMode(!darkMode)
    !darkMode ? changeColor('#343a40','#d1d1d1') : changeColor('#e9e9e9', '#444')
  }

  const toggleFunMode = () => {
    setFunMode(!funMode)
    setClickCount(clickCount +  1)
    !funMode ? setFunCount(funCount + 1) : setFunCount(funCount)
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
      <Button style={{ position: 'absolute', right: '1rem', top:'1rem'}} className='btn-sm' id='darkModeButton' variant={darkMode ? 'light' : 'dark' } onClick={() => toggleDarkMode()}>{darkMode ? 'Light' : 'Dark'} Mode</Button>
      <div style={{ backgroundColor: backgroundColor }} className='container'>
        <Router history={history} basename={process.env.PUBLIC_URL}>
            <header style={{ textColor: textColor, backgroundColor: backgroundColor, paddingTop: '2rem'}} >
              <Link style={{ color: textColor }} to='/'>Home</Link>
              {/* <Link style={{ color: textColor }} to='/about'>About</Link> */}
              {/* <Link style={{ color: '#444' }} to='/about'>About</Link> */}
              <Link style={{ color: textColor }} to='/projects'>Projects</Link>
              <Link style={{ color: textColor }} to='/resume'>Resume</Link>
              {/* <Link style={{ color: textColor }} to='/sandbox'>Sandbox</Link> */}
            </header>
            <Switch>
            <Route exact path='/'>
                <Home
                  clickCount={clickCount}
                  funCount={funCount}
                  funMode={funMode}
                  toggleFunMode={toggleFunMode}
                  firstLoad={firstLoad}
                  textColor={textColor}
                  show={show}
                  skill={skill}
                  activity={activity}/>
              </Route>
              <Route exact path='/'>
                <Home
                clickCount={clickCount}
                funCount={funCount}
                funMode={funMode}
                toggleFunMode={toggleFunMode}
                firstLoad={firstLoad}
                textColor={textColor}
                show={show}
                skill={skill}
                activity={activity}/>
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
              <Route path='/sandbox'>
                <Sandbox />
              </Route>
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
