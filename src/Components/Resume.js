import React, { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Fade from '../Fade'


const Resume = ({ textColor }) => {

  return (
    <div style={{ color: textColor }} className='mainContent'>
      <h1 style={{ marginBottom: '0' }}>Zack McKenna</h1>
      <aside>Philadelphia, PA</aside>
      <h2 style={{ marginTop: '1rem' }}><strong>Education</strong></h2>
      <h5 style={{ marginBottom: '0' }}><strong>BA Global Media Industries and Philosophy</strong></h5>
      <ul>
        <li>Arcadia University, USA: 2009-2013</li>
        <li>City University of London, UK: 2009-2010</li>
        <li>University of Wollongong, AUS: 2010-2011</li>
      </ul>
      <h5 style={{ marginBottom: '0' }}><strong>Full-Stack Web Development</strong></h5>
      <ul>
        <li>University of Helsinki Full Stack Open Online 2019</li>
        <li>NuCamp Full-Stack Web Development 2019-2020</li>
      </ul>
      <p>Please refer to my <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/zachary-mckenna-77912678/'>LinkedIn</a> for more certificates and classes.</p>
      <h2><strong>Experience</strong></h2>
        <div style={{ marginTop: '1rem' }}>
          <h5><strong>Full-Stack Web Development</strong></h5>
          <p>2018 - current</p>
            <ul>
              <li>Full-Stack Mongo, Express, React, Node web application development from scratch</li>
              <li>API and Web Service integration experience</li>
              <li>Up to date with latest updates like React Hooks</li>
              <li>Strong understanding of UI/UX design</li>
              <li>React Native development experience with Expo</li>
            </ul>
          <h5><strong>Professional A/V Design</strong></h5>
            <p>2013 - current</p>
            <p>Over the past seven years I've worked as an engineer and technician for productions all throughout Philly, on hundreds of unique productions. Here are some of my highlights.</p>
            <h6><strong>IATSE Local 8</strong></h6>
                <ul>
                  <li>Second Audio - <a rel='noopener noreferrer' target='_blank' href='https://www.walnutstreettheatre.org/'>The Walnut Street Theater</a></li>
                  <li>Projection Engineer - NFL Draft</li>
                  <li>A/V Engineer - Philadelphia Convention Center</li>
                  <li>Electrics and Audio Team - The Well Fargo Center</li>
                </ul>
            <h6><strong>Sound Design</strong></h6>
              <ul>
                <li><em><a rel='noopener noreferrer' target='_blank' href='https://inisnuatheatre.org/show/radicalisation-bradley-manning'>The Radicalisation of Bradley Manning</a></em>- Inis Nua</li>
                <li><em>ALIVE!</em> - Arcadia University - <a rel='noopener noreferrer' target='_blank' href='https://www.youtube.com/watch?v=KDXZcv8LCdE'>video excerpt</a></li>
                <li><em><a rel='noopener noreferrer' target='_blank' href='https://fringearts.com/event/sincerity-project-9/'>The Sincerity Project 2016</a></em> - Team Sunshine Corporation</li>
                <li><em>A Christmas Carol</em> - Walnut Street Theater 2018 and 2019</li>
                <li><em><a rel='noopener noreferrer' target='_blank' href='https://www.inquirer.com/arts/theater/moby-dick-hedgerow-theatre-company-20190325.html'>Moby Dick</a></em> - Hedgerow Theater</li>
              </ul>
          <h6><strong>Associate Sound Design</strong></h6>
            <ul>
              <li><em>Baskerville</em> - Philadelphia Theater Company, Designer: Joshua Horvath</li>
              <li><em>Grounded</em> - InterAct Theater, Designer: Robert Kaplowitz</li>
              <li><em>The Beauty and The Beast</em> - Arden Theater, Designer: Robert Kaplowitz</li>
              <li><em>Passage</em> - The Wilma Theater, Designer: Christopher Colucci</li>
            </ul>
          <h6><strong>Audio Engineering</strong></h6>
            <ul>
              <li>Lead Audio Engineer - <a rel='noopener noreferrer' target='_blank' href='https://www.lanterntheater.org/'>Lantern Theater Company</a></li>
              <li>Lead Audio Engineer - <a rel='noopener noreferrer' target='_blank' href='https://www.1812productions.org/'>1812 Productions</a></li>
              <li>House Audio Engineer - The Prince Theater</li>
              <li>FringeFest Audio Engineer - FringeArts</li>
              <li>peh-LO-tah, Sozo Artists/Marc Bamuthi US Tour</li>
              <li>I Promised Myself to Live Faster, Pig Iron Theater Company</li>
            </ul>
          <h6><strong>Projection Design</strong></h6>
            <ul>
              <li><em>I Am Not My Father</em> - Orbiter 3</li>
              <li><em>The Gospel: According to Jefferson, Tolstoy and Dickens</em> - The Lantern Theater Company</li>
              <li><em>Speech and Debate</em> - Azuka Theater </li>
              <li><em>Underneath the Lintel</em> - The Lantern Theater</li>
            </ul>
          <h6><strong>...and over a hundred other events that wont fit on this page.</strong></h6>
          <h2 style={{ marginTop: '1rem' }}><strong>Skills</strong></h2>
            <ul>
              <li>Teamwork</li>
              <li>Collaboration</li>
              <li>Self-Management</li>
              <li>Problem Solving</li>
              <li>Speed Learning</li>
              <li>Creativity</li>
              <li>Design</li>
            </ul>
          <h2 style={{ marginTop: '1rem' }}><strong>Interests</strong></h2>
            <ul style={{ marginBottom: '0', paddingBottom: '1rem' }}>
              <li>Biking and Bike Commuting</li>
              <li>Climbing</li>
              <li>Boardgames</li>
              <li>Game Development</li>
              <li>Making Music</li>
              <li>Gardening</li>
            </ul>
        </div>
      </div>
  )
}

export default Resume
