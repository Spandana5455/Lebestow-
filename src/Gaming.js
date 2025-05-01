import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gaming.css';
import gamingoffer from './images/gamingoffer.png';
import gamingimg1 from './images/gamingimg1.png';
import gamingimg2 from './images/gamingimg2.png';

const Gaming = () => {
  return (
    <>
    <div className="gaming-background-wrapper">
      <div className="container gaming-content">
        <div className="carousel-caption d-none d-md-block">
          <h2 className='gaming-heading'>Where Play <br /> Meets Everyday <br/>Living</h2>
          <p className='gaming-body'>
            Take a break. Spark a friendly challenge. Or just have fun.<br />
            Our games lounge brings together snooker and table tennis in a cozy, stylish Space <br/>designed for everyday downtime and social connection.
          </p>
        </div>
      </div>
    </div>
    <br/>

    <div className="gaming-offer-section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={gamingoffer} className="gamingoffer" alt='gamingoffer'/>
          </div>
          
          <div className="col-6">
            <h2 className="gaming-offer-heading">Lebestow</h2>
            <h1 className="gaming-offer-subheading">Just for you</h1>
            <h2 className="gaming-offer-percentage">20% <span className="offer-percentage-off">OFF</span></h2>
            <br/>
            <div className="gaming-offer-note-custom">
              <li className="gaming-offer-note">Note: The Gaming Zone Open To Everyone</li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>

    <div className="snooker-section">
      <div className="container">
        <div className="row p-2">
          <div className="col-4">
            <h2 className="snooker-heading">SNOOKER</h2>
            <p className="snooker-body">Sharpen your aim in a quiet, pro-grade snooker space. Whether you're mastering the break or playing a friendly match, our setup fuels your calm, calculated game.</p>
            <div className='snookerbooknow'>
            <Link to="./Bookyourgame"><button className='snooker-book-now'>Book Now</button></Link>
            </div>
          </div>

          <div className="col-8">
            <img src={gamingimg1} className='snooker-image' alt='snooker-image'/>
          </div>
        </div>
      </div>
    </div>
    <br/>

    <div className="tennis-section">
      <div className="container">
        <div className="row p-2">
          <div className="col-8">
            <img src={gamingimg2} className='tennis-image' alt='tennis-image'/>
          </div>

          <div className="col-4">
            <h2 className="tennis-heading">TABLE TENNIS</h2>
            <p className="tennis-body">Smash, spin, and rally with your squad in our dynamic table tennis zone. Crafted for high energy and tight reflexes—no coaching needed, just your best game.</p>
            <div className='tennisbooknow'>
              <Link to="./Bookyourgame"><button className='tennis-book-now'>Book Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gaming;


