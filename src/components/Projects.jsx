import React from 'react';
import './Projects.scss'
import createacontract from '../assets/createacontract.png'

function Projects() {
  return (
    <div id='projects' className="projects">
      <h1>Projects</h1>
      <div className="theprojects">
        <div className="project1">
          <a href="https://create-a-contract.com"><img src={createacontract} alt="project1"/></a>
          <a href="https://create-a-contract.com">            <h6>Create A Contract</h6></a>
            <p>Create A Contract allows you to create legally-binding template contracts for your company and then save them as a PDF. </p>
        </div>
        <div className="project2">
            <img src={createacontract} alt="project2"/>
            <h6>Group Project</h6>
            <p>This group project is awesome and you should take a look, I did great work and I'm proud of it too. thanks for looking</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
