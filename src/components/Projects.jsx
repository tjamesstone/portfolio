import React from 'react';
import './Projects.scss'
import createacontract from '../assets/createacontract.png'
import smakd from '../assets/smakd.png'

function Projects() {
  return (
    <div id='projects' className="projects">
      <h1>Projects</h1>
      <div className="theprojects">
        <div className="project1">
          <a href="https://create-a-contract.com"><img className='theultimateimage' src={createacontract} alt="project1"/></a>
          <a href="https://create-a-contract.com">            <h6>Create A Contract</h6></a>
            <p>Create A Contract allows you to create legally-binding template contracts for your company and then save them as a PDF. </p>
        </div>
        <div className="project1">
        <a href="https://www.smakd.fun/#/"><img className='theultimateimage' src={smakd} alt="project1"/></a>
        <a href="https://www.smakd.fun/#/">            <h6>SMAK'D</h6></a>
            <p>SMAK'D is a multiplayer party game built in React and heavily dependent upon sockets. This game can be played on your phone or on your computer. Check it out.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
