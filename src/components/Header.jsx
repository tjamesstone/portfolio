import React, {Component} from 'react';
import './Header.scss'

class Header extends Component{
  constructor() {
    super()
    this.state ={}
  }

 

  render(){
  return (
    <div className="header">
      <a href="#home"><h1 className='tjs'>tjs</h1></a>
        <div className="options">
          <a href="#home"><p>Home</p> </a>
          <a href="#about"><p>About</p></a>
          <a href="#projects"><p>Projects</p></a>
          <a href="#skills"><p>Skills</p> </a>
          <a href="#contact"><p>Contact</p></a>
        </div>
    </div>
  )};
}

export default Header;
