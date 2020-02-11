import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Projects.css'

const Projects = (props) => {
  return (
    < >
        <h2>Projects</h2>
        <h4>Seawitched</h4>
        <p className='projectText'>Seawitched is a RPG multiplayer card-game client. For games like Mafia and Werewolf, most apps on the market only distributed roles via one device that was passed around. Seawitched detects the amount of users in the room, selects the right amount of roles, and distributes roles to each client's device! Way cooler and way less confusing.</p>
        <p><a rel="noopener noreferrer" target='_blank' href='https://dry-reaches-10019.herokuapp.com'>Deployed on Heroku Here</a> or check it out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/sturdy-journey-frontend'>Github</a></p>
        <h4>Gornath Crafter's Guild</h4>
        <p className='projectText'>Gornath Crafter's Guild is a local multiplayer party game web app developed over the course of a weekend for Global Game Jam 2020. It uses a Node backend that is integrated with the Airtable API for easy database management, which is used to import components where they are randomized and distributed via the app.</p>
        <p><a rel="noopener noreferrer" target='_blank' href='https://zackmckenna.github.io/GGJ_2020/'>Deployed on Github Pages Here</a> or check it out on <a rel="noopener noreferrer" target='_blank' href='https://github.com/zackmckenna/GGJ_2020'>Github</a></p>
    </>
  )
}

export default Projects
