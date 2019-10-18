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
        <h1 className='tjs'>tjs</h1>
        <div className="options">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Contact</p>
        </div>
    </div>
  )};
}

export default Header;
