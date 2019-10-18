import React from 'react';
import './Main.scss'
import picture1 from '../assets/IMG_1737.png'
import picture2 from '../assets/1-1.png';
import picture3 from '../assets/IMG_2037.png'
import picture4 from '../assets/IMG_1966.png';
import picture5 from '../assets/IMG_2471.png';

function Main() {
  return (
    <div className="main">
        <h1>Tate J Stone</h1>
        <div className="picture">
            <img className='picture1' src={picture1} alt="picture1"/>
            <img className='picture2' src={picture2} alt="picture2"/>
            <img className='picture3' src={picture3} alt="picture3"/>
            <img className='picture4'src={picture4} alt="picture4"/>
            <img className='picture5' src={picture5} alt="picture5"/>
        </div>
    </div>  
  );
}

export default Main;
