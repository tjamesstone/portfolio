import React from 'react';
import './HomePage.scss'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Stack from './Stack'
import Main from './Main'
import Header from './Header'

function HomePage() {
  return (
    <div className="homepage">
      <Header/>
      <Main />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}

export default HomePage;
