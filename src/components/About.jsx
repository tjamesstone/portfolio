import React from 'react';
import './About.scss'
import DevMtn from '../assets/icon.png'
import BYU from '../assets/byu2.png'

function OtherPage() {
  return (
    <div id='about' className="about">
      <div className="bio">
      <h1>About</h1>
        <h3>Bio</h3>
        <p>For the past 3 years I’ve loved working at a tech startup. With experience in marketing, accounting, and operations I understand the SaaS space. Implementing technologies, improving procedures, and increasing revenue is what I do.</p>
      </div>
      {/* <div className="experience">
        <h3>Experience</h3>
      </div> */}
      <div className="education">
        <h3>Education</h3>
        <div className="education1">
          <img src={BYU} alt="byu"/>
          <p>B.S. Economics | Brigham Young University | 2016-2019</p>
        </div>
        <div className="education1">
          <img className='devpic' src={DevMtn} alt="dev"/>
          <p>Web Development | DevMountain | 2019</p>
        </div>
      </div>
    </div>
  );
}

export default OtherPage;
