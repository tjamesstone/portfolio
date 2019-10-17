import React from 'react';
import './Header.scss'
import logo from '../assets/IMG_0835.PNG'

function Header() {
  return (
    <div className="header">
        <img clasName='logo' src={logo} alt="logo"/>
        
    </div>
  );
}

export default Header;
