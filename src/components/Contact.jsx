import React from 'react';
import './Contact.scss'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/img_326384.png'

function Contact() {
  return (
    <div id='contact' className="Contact">
      <h1>Contact</h1>
      <div className="contactoptions">
          <div className="email">
            <img src={email} alt="email"/>
            <a href="mailto:tatejamesstone@gmail.com">tatejamesstone@gmail.com</a>
          </div>
          <div className="linkedin">
            <img src={linkedin} alt="linkedin"/>
            <a href="https://www.linkedin.com/in/tatejstone">www.linkedin.com/in/tatejstone</a>
          </div>
          <div className="github">
            <img src={github} alt="github"/>
            <a href="https://github.com/tjamesstone">www.github.com/tjamesstone</a>
          </div>
      </div>
    </div>
  );
}

export default Contact;
