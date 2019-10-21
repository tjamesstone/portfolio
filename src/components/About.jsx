import React from 'react';
import './About.scss'
import DevMtn from '../assets/devbanner.png'
import BYU from '../assets/byu2.png'

function OtherPage() {
  return (
    <div id='about' className="about">
      <div className="bio">
      <h1>About</h1>
        <h3>Bio</h3>
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
          <p>DevMountain | 2019</p>
        </div>
      </div>
    </div>
  );
}

export default OtherPage;
