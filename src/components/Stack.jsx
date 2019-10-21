import React from 'react';
import './Stack.scss'


function Stack() {
  return (
    <div id='skills' className="stack">
      <h1>Skills</h1>
      <div className="images">
        <div className="cssoutside" >
          <div className="inside">
            <p>CSS3</p>
          </div>
        </div>
        <div className="htmloutside" >
          <div className="inside">
            <p>HTML</p>
          </div>
        </div>
        <div className="sassoutside" >
          <div className="inside">
            <p>Sass</p>
          </div>
        </div>
        <div className="javascriptoutside" >
          <div className="inside">
            <p>Javascript</p>
          </div>
        </div>
        <div className="reactoutside" >
          <div className="inside">
            <p>React</p>
          </div>
        </div>
        <div className="nodeoutside" >
          <div className="inside">
            <p>Node</p>
          </div>
        </div>
        <div className="postgressqloutside" >
          <div className="inside">
            <p>PostgresSQL</p>
          </div>
        </div>
        <div className="gitoutside" >
          <div className="inside">
            <p>Git</p>
          </div>
        </div>
        <div className="salesforceoutside" >
          <div className="inside">
            <p>Salesforce</p>
          </div>
        </div>
        <div className="zoutside" >
          <div className="inside">
            <p>Zuora</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
