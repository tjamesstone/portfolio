import React from 'react';
import './Main.scss'
import picture1 from '../assets/1.png';
import picture3 from '../assets/3.png';
import picture4 from '../assets/4.png';
import picture5 from '../assets/5.png';
import picture7 from '../assets/7.png';
import Slider from 'react-slick';

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    cssEase: 'linear',
    autoplaySpeed: 3000
  }
  return (

    <div id='home' className="main">
      <div className="tenhigh">
        
      </div>
        <h1>Tate J Stone</h1>
        <p className='animated' >I'm all about tech, startups, and data. Let's get to work!</p>
        <div className="picture">
          <Slider {...settings}>
            <img className='picture1' src={picture1} alt="picture1"/>
            <img className='picture3' src={picture3} alt="picture3"/>
            <img className='picture4'src={picture4} alt="picture4"/>
            <img className='picture5' src={picture5} alt="picture5"/>
            <img className='picture7' src={picture7} alt="picture7"/>
          </Slider>
        </div>
        <p className='othertext' >Outside of work you'll find me with my family, following up on our monthly budget, and exercising.</p>

    </div>  
  );
}

export default Main;
