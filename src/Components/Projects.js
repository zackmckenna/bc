import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Projects.css'
import { Carousel } from 'react-bootstrap'
import screen1 from '../pictures/home.png'
import screen2 from '../pictures/addclimb.png'
import screen3 from '../pictures/climbs.png'
import screen4 from '../pictures/graph.png'

const Projects = ({ textColor, backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }} className='mainContent'>
      <h1><strong>Projects</strong></h1>
      <h4 style={{ marginTop: '1rem' }}><strong>From the Root to the Fruit</strong></h4><h6>JAMstack - React.js - Bootstrap - Gatsby - Netlify</h6>
      <p className='projectText'>A webpage built for the event From the Root to the Fruit: Portraits of Black Fathers and Their Children, presented at the Barnes. Developed using the JAMstack, built with Gatsby, and deployed/hosted on CMS via Netlify.</p>
      <p>View the site at <a rel="noopener noreferrer" target='_blank' href='https://www.fromtheroottothefruit.org/'>fromtheroottothefruit.org</a></p>
      <h4 style={{ marginTop: '1rem' }}><strong>Project CARL</strong></h4><h6>Python - Jinja -  Vanilla HTML & CSS</h6>
      <p className='projectText'>A front end redesign of Project CARL, the ChatHacks Rom Loader. After authentication via Twitch, it allows users to write and submit ASM code for Patcdr's Twitch channel via a custom built code editor.</p>
      <p>View the site at <a rel="noopener noreferrer" target='_blank' href='https://patcdr.net/carl/'>patcdr.net/carl</a></p>
      <h4 style={{ marginTop: '1rem' }}><strong>Currensea</strong></h4><h6>React.js - RESTful API - Bootstrap</h6>
      <p className='projectText'>Built and deployed over the course of only 4 hours for a Mintbean hackathon, Currensea is a a currency converter that is fast and responsive, handling conversions in response to the user in real time.</p>
      <p>View it live <a rel="noopener noreferrer" target='_blank' href='https://zackmckenna.github.io/current/'>here</a></p>
      <h4 style={{ marginTop: '1rem' }}><strong>MERN Boilerplate Chatroom with Socket.io/Redux</strong></h4><h6>MongoDB - Express - Node - React - Redux - Socket.io</h6>
      <p className='projectText'>A MERN stack application boilerplate with basic user authentication and database modeling, you just need to have your own MongoDB account and cluster. The Redux store is integrated with socket.io, so you can send and receive redux actions to distribute and maintain state among clients in dynamically generated rooms.</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/mern-socket-redux-boilerplate'>Check out or download the source here</a></p>
      <h4 style={{ marginTop: '1rem' }}><strong>Skeleton Card</strong></h4><h6>MongoDB - Express - Node - React - Redux - Socket.io</h6>
      <p className='projectText'>The next iteration of the Seawitched Project, Skeleton Card is a webapp platform that can handle dynamically generated rooms and unique game-types for RPG and storytelling games. Currently in development.</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://gentle-garden-20262.herokuapp.com/#/'>Check out the current iteration on Heroku here</a></p>
      <h4 style={{ marginTop: '1rem' }}><strong>Seawitched</strong></h4><h6>MongoDB - Express - Node - React - Socket.io</h6>
      <p className='projectText'>Seawitched is a RPG multiplayer card-game client. For games like Mafia and Werewolf, most apps on the market only distributed roles via one device that was passed around. With Seawitched, users create a unique login and join a game lobby. The app then detects the amount of users in the room, selects the right amount of roles, and distributes roles to each client's device! Way cooler and way less confusing. To use, grab four players and log in to populate the game lobby.</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://dry-reaches-10019.herokuapp.com'>Deployed on Heroku Here</a> or check it out the frontend on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/sturdy-journey-frontend'>Github</a>, the backend <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/sturdy-journey'>here</a></p>
      <h4><strong>Gornath Crafter's Guild</strong></h4><h6>MongoDB - Express - Node - React - AirtableAPI</h6>
      <p className='projectText'>Gornath Crafter's Guild is a local multiplayer party game web app developed over the course of a weekend (approx development 20hrs) for Global Game Jam 2020. It uses a Node backend that is integrated with the Airtable API for easy database management, which is used to import components where they are randomized and distributed via the app. Grab 3-5 friends, some paper and pens, and become part of the crafters guild!</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://zackmckenna.github.io/GGJ_2020/'>Deployed on Github Pages Here</a> or check it out the source on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/GGJ_2020'>Github</a>.</p>
      <h4><strong>Bould.</strong></h4><h6>MongoDB - Express - Node - ReactNative</h6>
      <p>A minimalist climb-tracking app. A lot of the other apps on the market are bloated with features, and don't give you a concrete way to understand your own progression. Bould aims to be quick and simple to use, and provide an even easier way to understand your data. Check it out backend <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/bouldServer'>here</a>, front end <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/bouldReactNative'>here</a>. Demo on <a rel="noopener noreferrer" target='_blank' href='https://exp.host/@zackmckenna/bould'>Expo</a>.</p>
      <div style={{ marginBottom: '3vh', display: 'flex', flex: 1, justifyContent: 'center', justifyItems: 'center' }}>
        <img
              style={{ width: '15vw', marginLeft: '1vw', marginRight: '1vw'}}
              className="d-block"
              src={screen1}
              alt="First slide"
            />
            <img
              style={{ width: '15vw', marginLeft: '1vw', marginRight: '1vw'}}
              className="d-block"
              src={screen2}
              alt="Third slide"
            />

            <img
              style={{ width: '15vw', marginLeft: '1vw', marginRight: '1vw'}}
              className="d-block"
              src={screen3}
              alt="Third slide"
            />
{/*
          <img
              style={{ width: '15vw', marginLeft: '1vw', marginRight: '1vw'}}
              className="d-block"
              src={screen4}
              alt="Third slide"
            /> */}
      </div >
      <h4><strong>NuCamp</strong></h4><h6>Node - ReactNative</h6>
      <p>A camping social media native mobile device app where you can rate, review, and comment on campsites. It was created using React Native and Expo SDK, and includes authentication for device functions like the camera/camera roll and native gesture handling. Check it out the source on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/nucamp_react_native'>GitHub</a>.</p>
      <h4><strong>StaRV</strong></h4><h6>Unity</h6>
      <p style={{ marginBottom: '0px', paddingBottom: '1rem' }} className='projectText'>StaRV was built for Global Game Jam 2019. It's a single player outer-space road trip arcade adventure, where you play as a parent desperately trying to keep your StaRV on course to the vacation planet Nebula. Check out the <a rel="noopener noreferrer" target='_blank' href='https://globalgamejam.org/2019/games/starv'>Global Game Jam Page</a>.</p>
    </div>
  )
}

export default Projects
