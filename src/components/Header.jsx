import React from 'react';
import './Header.scss'
import logo from '../assets/IMG_0835.PNG'

function Header() {
  return (
    <div className="header">
        <img clasName='logo' src={logo} alt="logo"/>
        <div className="options">
            <p>Main</p>
            <p>About</p>
            <p>Projects</p>
            <p>Stack</p>
            <p>Contact</p>
        </div>
    </div>
  );
}

export default Header;
