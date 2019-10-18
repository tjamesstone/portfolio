import React from 'react';
import './Stack.scss'
import css3 from '../assets/css3.png'
import html5 from '../assets/html5.png'
import sass from '../assets/sass.png'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.png'
import postgressql from '../assets/postgressql.png'
import gitpic from '../assets/git.png'
import salesforce from '../assets/salesforce.png'
import zuora from '../assets/zuora.jpg'

function Stack() {
  return (
    <div className="stack">
      <h1>Skills</h1>
      <div className="images">
        <div className="cssoutside" >
          <div className="inside">
            <p>CSS3</p>
          </div>
        </div>
        <div className="htmlcontainer">
          <img className='html5' src={html5} alt="html5"/>
          <p>HTML5</p>
        </div>
        <div className="container">
          <img className='sass' src={sass} alt="sass"/>
          <p>Sass</p>
        </div>
        <div className="container">
          <img className='javascript' src={javascript} alt="javascript"/>
          <p>Javascript</p>
        </div>
        <div className="container">
          <img className='reactjs' src={reactjs} alt="reactjs"/>
          <p>React</p>
        </div>
        <div className="container">
          <img className='nodejs' src={nodejs} alt="nodejs"/>
          <p>Node.js</p>
        </div>
        <div className="container">
          <img className='postgressql' src={postgressql} alt="postgressql"/>
          <p>PostgresSQL</p>
        </div>
        <div className="container">
          <img className='gitpic' src={gitpic} alt="gitpic"/>
          <p>Git</p>
        </div>
        <div className="container">
          <img className='salesforce' src={salesforce} alt="salesforce"/>
          <p>Salesforce</p>
        </div>
        <div className="container">
          <img className='zuora' src={zuora} alt="zuora"/>
          <p>Zuora</p>
        </div>
      </div>
    </div>
  );
}

export default Stack;
