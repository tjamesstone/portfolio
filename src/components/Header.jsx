import React, {Component} from 'react';
import './Header.scss'
import logo from '../assets/IMG_0835.PNG'

class Header extends Component{
  constructor() {
    super()
    this.state ={}
  }

 

  render(){
  return (
    <div className="header">
        <img className='logo' src={logo} alt="logo"/>
        <div className="options">
            <p>Main</p>
            <p>About</p>
            <p>Projects</p>
            <p>Stack</p>
            <p>Contact</p>
        </div>
    </div>
  )};
}

export default Header;
