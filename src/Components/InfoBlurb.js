import React, { useState, useEffect } from 'react'
import Fade from '../Fade'

const InfoBlurb = ({skill, activity}) => {
  const [show, setShow] = useState(false)
  const [lastSkill, setLastSkill] = useState('')
  const [lastActivity, setLastActivity] = useState('')

  useEffect(() => {
    cycleShow()
  }, [])

  const cycleShow = () => {
    setLastActivity(activity)
    setLastSkill(skill)
    setShow(show => !show)
    setTimeout(() => {
      setShow(show => !show)
    }, 4000)
    setTimeout(() => {
      cycleShow()
    }, 5000)
  }

  return (
    <>
    <h1>i'm zack mckenna</h1>
      <Fade show={show}>
        <h2>a <span style={{ color: '#5bc0de' }}>{skill}</span> who <span style={{ color: '#5cb85c' }}>{activity}</span></h2>
      </Fade>
    </>
  )
}

export default InfoBlurb
