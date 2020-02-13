import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Projects.css'

const Projects = ({ textColor, backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}className='mainContent'>
      <h2><strong>Projects</strong></h2>
      <h4 style={{ marginTop: '1rem' }}><strong>Seawitched</strong></h4>
      <p className='projectText'>Seawitched is a RPG multiplayer card-game client. For games like Mafia and Werewolf, most apps on the market only distributed roles via one device that was passed around. With Seawitched, users create a unique login and join a game lobby. The app then detects the amount of users in the room, selects the right amount of roles, and distributes roles to each client's device! Way cooler and way less confusing. To use, grab four players and log in to populate the game lobby.</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://dry-reaches-10019.herokuapp.com'>Deployed on Heroku Here</a> or check it out the source on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/sturdy-journey-frontend'>Github</a></p>
      <h4><strong>Gornath Crafter's Guild</strong></h4>
      <p className='projectText'>Gornath Crafter's Guild is a local multiplayer party game web app developed over the course of a weekend (approx development 20hrs) for Global Game Jam 2020. It uses a Node backend that is integrated with the Airtable API for easy database management, which is used to import components where they are randomized and distributed via the app. Grab 3-5 friends, some paper and pens, and become part of the crafters guild!</p>
      <p><a rel="noopener noreferrer" target='_blank' href='https://zackmckenna.github.io/GGJ_2020/'>Deployed on Github Pages Here</a> or check it out the source on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/GGJ_2020'>Github</a></p>
      <h4><strong>NuCamp</strong></h4>
      <p>A camping social media native mobile device app where you can rate, review, and comment on campsites. It was created using React Native and Expo SDK, and includes authentication for device functions like the camera/camera roll and native gesture handling. Check it out the source on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/nucamp_react_native'>GitHub</a></p>
      <h4><strong>Skel</strong></h4>
      <p>Skel is a RPG card game platform built from scratch. Instead of one game mode like SeaWitched, Skel can handle various game types. It also can handle more concurrent users, dynamically created game lobbies and a UI for custom content creation.</p>
      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

export default Projects
