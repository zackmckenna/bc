import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from '../Fade'
import FadeIcons from '../FadeIcons'
import FadeFun from '../FadeFun'

const Home = ({
                funCount,
                funMode,
                toggleFunMode,
                firstLoad,
                textColor,
                skill,
                activity,
                show }) => {
  const [iconShow, setIconShow] = useState(false)
  const [iconFadeIn, setIconFadeIn] = useState(1)
  const [funFade, setFunFade] = useState(true)

  useEffect(() => {
    console.log(firstLoad)
    firstLoad ? setIconFadeIn(2000) : setIconFadeIn(0)
    setTimeout(() => {
      setIconShow(true)
      setIconFadeIn(1)
    }, iconFadeIn)
  }, [])

  const responseArray = [
    'thanks for visiting my site',
    'thanks for visiting my site',
    'no, really. thank you.',
    'look, I really appreciate it',
    `that's seven clicks`,
    'ok, nine clicks',
    `I'll run out of answers eventually`,
    'I promise',
    'you can probably stop clicking now',
    `I'm running out of things to say`,
    'are you getting bored yet?',
    `I can only create so many answers`,
    'is this the best use of your time?',
    `that's it! I'm out!`,
    'gone',
    'goodbye',
    'never again',
    'nothing here to see',
    'move along now',
    'really! go click on some other link',
    'please',
    `don't make me keep going with this`,
    'because I will',
    'this is a war of attrition',
    'click-trition',
    `bad puns don't bother you?`
  ]

  if(funMode) {
    return (
      <div style={{ height: '100vh', color: textColor, marginTop: '20vh' }} className='mainContentFun'>
        <FadeFun show={funFade}>
          <h1 className='hiImZack' style={{ textAlign: 'center'}} onClick={() => toggleFunMode()}>{responseArray[funCount] ? responseArray[funCount] : 'I have no more to say'}</h1>
        </FadeFun>
      <Fade show={show}>
        <aside style={{textAlign: 'center' }}>a {skill} who {activity}</aside>
      </Fade>
      <FadeIcons show={iconShow}>
        <div style={{ marginTop: '1rem', justifyContent: 'center', display: 'flex'}}>
          <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://github.com/zackmckenna'><GitHubIcon /></a></div>
          <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://www.linkedin.com/in/zachary-mckenna-77912678/'><LinkedInIcon /></a></div>
          <div></div>
        </div>
      </FadeIcons>
    </div>
    )
  } else {
    return (
      <div style={{ height: '100vh', color: textColor, marginTop: '20vh' }} className='mainContent'>
        <h1 className='hiImZack' style={{textAlign: 'center'}} onClick={() => toggleFunMode()}>Hey, I'm Zack McKenna</h1>
        <Fade show={show}>
          <aside style={{textAlign: 'center' }}>a {skill} who {activity}</aside>
        </Fade>
        <FadeIcons show={iconShow}>
          <div style={{ marginTop: '1rem', justifyContent: 'center', display: 'flex'}}>
            <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://github.com/zackmckenna'><GitHubIcon /></a></div>
            <div style={{ marginLeft: '10px', marginRight: '10px'}}><a rel='noopener noreferrer' style={{ color: 'inherit' }} target='_blank' href='https://www.linkedin.com/in/zachary-mckenna-77912678/'><LinkedInIcon /></a></div>
            <div></div>
          </div>
        </FadeIcons>
      </div>
    )
  }
}

export default Home
