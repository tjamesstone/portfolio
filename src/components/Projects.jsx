import React from 'react';
import './Projects.scss'
import createacontract from '../assets/createacontract.png'

function Projects() {
  return (
    <div id='projects' className="projects">
      <h1>Projects</h1>
      <div className="theprojects">
        <div className="project1">
            <img src={createacontract} alt="project1"/>
            <h6>Create A Contract</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi sapiente tempore vitae minima, quos aperiam voluptatibus molestias, praesentium, laudantium officia accusantium adipisci cum repellat laboriosam. Deleniti sed repellat voluptatum.</p>
        </div>
        <div className="project2">
            <img src={createacontract} alt="project2"/>
            <h6>Group Project</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ea architecto numquam assumenda consequatur doloribus debitis, tempore, sed molestias harum dignissimos eius, molestiae praesentium sit illo veniam eum dolores fuga!</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
