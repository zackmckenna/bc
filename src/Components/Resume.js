import React, { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Fade from '../Fade'


const Resume = ({ skill, activity, show }) => {

  return (
    <div className='mainContent'>
      <h1 style={{ marginBottom: '0' }}>Zack McKenna</h1>
      <aside>Philadelphia, PA</aside>
      <h2 style={{ marginTop: '1rem' }}><strong>Education</strong></h2>
      <p style={{ marginBottom: '0' }}>BA Global Media Industries and Philosophy</p>
      <ul>
        <li>Arcadia University, USA: 2009-2013</li>
        <li>City University of London, UK: 2009-2010</li>
        <li>University of Wollongong, AUS: 2010-2011</li>
      </ul>
      <p style={{ marginBottom: '0' }}>Full-Stack Web Development</p>
      <ul>
        <li>University of Helsinki Full Stack Open Online 2019</li>
        <li>NuCamp Full-Stack Web Development 2019-2020</li>
      </ul>
      <h2><strong>Experience</strong></h2>
        <div style={{ marginTop: '1rem' }}>
          <h3>Full-Stack Web Development</h3>
            <ul>
              <li>Full-Stack Mongo, Express, React, Node web application development from scratch</li>
              <li>Third party API and Web Service integration experience</li>
              <li>Up to date with latest tech like React Hooks</li>
              <li>Strong understanding of UI/UX design</li>
              <li>React Native development with Expo</li>
            </ul>
          <h3>Professional Sound and Projection</h3>
            <h5><strong>IATSE Local 8</strong></h5>
                <ul>
                  <li>Second Audio - The Walnut Street Theater</li>
                  <li>Props - Netflix's When They See Us</li>
                  <li>Projection Engineer - NFL Draft</li>
                  <li>A/V Engineer - Philadelphia Convention Center</li>
                  <li>Electrics and Audio Team - Well Fargo Center</li>
                </ul>
            <h5><strong>Sound Design</strong></h5>
              <ul>
                <li><em>The Radicalization of Bradley Manning</em>- Inis Nua Theater Company</li>
                <li><em>ALIVE!</em> - Arcadia University</li>
                <li><em>The Sincerity Project 2016</em> - Team Sunshine Corporation</li>
                <li><em>A Christmas Carol</em> - Walnut Street Theater 2018 and 2019</li>
                <li><em>Moby Dick</em> - Hedgerow Theater</li>
              </ul>
          <h5><strong>Associate Sound Design</strong></h5>
            <ul>
              <li>Baskerville, Philadelphia Theater Company, Designer: Joshua Horvath</li>
              <li>Grounded, InterAct Theater, Designer: Robert Kaplowitz</li>
              <li>The Beauty and The Beast, Arden Theater, Designer: Robert Kaplowitz</li>
              <li>Passage, The Wilma Theater, Designer: Christopher Colucci</li>
            </ul>
          <h5><strong>Audio Engineering</strong></h5>
            <ul>
              <li>Lead Audio Engineer - Lantern Theater Company</li>
              <li>Lead Audio Engineer - 1812 Productions</li>
              <li>FringeFest Audio Engineer - FringeArts</li>
              <li>peh-LO-tah, Sozo Artists/Marc Bamuthi Tour</li>
              <li>I Promised Myself to Live Faster, Pig Iron Theater Company</li>
            </ul>
          <h5><strong>Projection Design</strong></h5>
            <ul>
              <li>I Am Not My Father, Orbiter 3</li>
              <li>The Gospel: According to Jefferson, Tolstoy and Dickens, The Lantern Theater Company</li>
              <li>Speech and Debate, Azuka Theater </li>
              <li>Underneath the Lintel, The Lantern Theater</li>
            </ul>
          <h5><strong>...and over a hundred other events that wont fit on this page.</strong></h5>
          <h2 style={{ marginTop: '1rem' }}><strong>Skills</strong></h2>
            <ul>
              <li>Teamwork</li>
              <li>Collaboration</li>
              <li>Self-Management</li>
              <li>Problem Solving</li>
              <li>Speed Learning</li>
            </ul>
          <h2 style={{ marginTop: '1rem' }}><strong>Interests</strong></h2>
            <ul>
              <li>Biking and Bike Commuting</li>
              <li>Climbing</li>
              <li>Boardgames</li>
              <li>Game Development</li>
              <li>Making Music</li>
            </ul>
        </div>

    </div>
  )
}

export default Resume
