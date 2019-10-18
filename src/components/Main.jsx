import React from 'react';
import './Main.scss'
import picture1 from '../assets/IMG_1737.jpeg'
// import picture2 from '../assets/1-1.PNG';
import picture3 from '../assets/IMG_2037.jpeg'
import picture4 from '../assets/IMG_1966.jpeg';
import picture5 from '../assets/IMG_2471.jpeg';
import Slider from 'react-slick'

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
    autoplaySpeed: 5000
  }
  return (
    <div className="main">
        <h1>Tate J Stone</h1>
        <p className='animated' >I'm all about tech, startups, and data. Let's get to work!</p>
        <div className="picture">
          <Slider {...settings}>
            <img className='picture1' src={picture1} alt="picture1"/>
            {/* <img className='picture2' src={picture2} alt="picture2"/> */}
            <img className='picture3' src={picture3} alt="picture3"/>
            <img className='picture4'src={picture4} alt="picture4"/>
            <img className='picture5' src={picture5} alt="picture5"/>
          </Slider>
        </div>
        <p className='othertext' >I'm also a real person, and outside of work you'll find me with my family, following up on our monthly budget, and exercising.</p>

    </div>  
  );
}

export default Main;
