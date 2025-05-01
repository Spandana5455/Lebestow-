import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Whychooselebestow from "./Whychooselebestow";
import Ourservices from "./Ourservices";
import Testimonials from "./Testimonials";
import locationicon from './images/locationicon.png';
import zoneimg1 from './images/zoneimg1.png';
import zoneimg2 from './images/zoneimg2.png';
import zoneimg3 from './images/zoneimg3.png';
import zonebg1 from './images/zonebg1.png';
import zonebg2 from './images/zonebg2.png';
import zonebg3 from './images/zonebg3.png';

const zoneData = [
  {
    category: 'Cafeteria',
    title: (
      <>
        Gather, Dine,<br />And Connect<br />Over Great Taste
      </>
    ),
    description:
      'Our café is where flavors meet friendships. Whether it\'s a quick coffee break or a long conversation over meals, every dish is served with a side of connection and community.',
    image: zoneimg1,
  },
  {
    category: 'Gym',
    title: (
      <>
        Energize Your<br />Body, Empower<br />Your Day
      </>
    ),
    description:
      'Designed for daily balance, our gym is your space to recharge, refocus, and reconnect with yourself. Modern equipment, flexible hours, and a community that moves with you.',
    image: zoneimg2,
  },
  {
    category: 'Gaming',
    title: (
      <>
        Compete, Relax,<br />and Play Your<br />Best Game
      </>
    ),
    description:
      'From casual games to spirited challenges, our gaming zone brings people together. Dive into friendly matches of table tennis or snooker, where play sparks new conversations.',
    image: zoneimg3,
  },
];


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const backgrounds = [zonebg1, zonebg2, zonebg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % zoneData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { category, title, description, image } = zoneData[activeIndex];

    return (
      <>
      <div className="hero-wrapper">
      <div className="hero-section">
            <div className="hero-content container">
                <h2 className="herosection-item">"Eat - Play - Stay"</h2>
                <p className="herosection-text">Discover modern co-living spaces in Hyderabad that combine comfort, convenience, and community. Enjoy fully-furnished rooms, high-speed Wi-Fi, daily meals, 
                  and dynamic shared spaces - all designed to help you thrive.
                </p>
            </div>
      </div>
      </div>
      <br/>
      <Whychooselebestow />
      
      <h2 className="here-our-zones-one text-center mb-4 pt-4">
        Here <span className="here-our-zones">Our Zones</span>
      </h2>
      <div
      className="zone-section"
      style={{
        backgroundImage: `url(${backgrounds[activeIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="zone-inner">
        <Container>
          <div className="carousel-wrapper position-relative d-flex justify-content-center align-items-center">
            <Row className="zone-card p-4 align-items-center">
              <Col md={6} className="text-start">
                <div className="zone-category-tag">{category}</div>
                <h3 className="zone-title">{title}</h3>
                <p className="zone-description">{description}</p>
              </Col>
              <Col md={6}>
                <img
                  src={image}
                  alt={category}
                  className="img-fluid rounded-4 zone-image"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>

  
      <Ourservices />
      <br/>
      <div className="location-section">
        <div className="container text-center">
          <h2 className="location-section-heading pt-4">Discover Our Hyderabad Locations</h2>
          <p className="location-section-body">Explore our co-living homes across Hyderabad — each thoughtfully designed to suit your lifestyle.</p>
          <br/>
          <div className="row pt-4">
            <div className="col">
              <div className="d-flex align-items-start">
                <img src={locationicon} className="" alt="" style={{ width: "48px", height: "48px", marginRight: "15px" }}/>
              </div>
              <h5 className="location-name">Aira <br/>Le Bestow Co Living</h5>
              <p className="location-body">Proximity to major tech companies 10-minute walk to metro station On-site café and coworking lounge</p>
            </div>
            <div className="col">
            <div className="d-flex align-items-start">
                <img src={locationicon} className="" alt="" style={{ width: "48px", height: "48px", marginRight: "15px" }}/>
              </div>
              <h5 className="location-name">Bhuvan <br/>Le Bestow Co Living</h5>
              <p className="location-body">Close to top educational institutions
              Study pods, open terrace, and community kitchen</p>
            </div>
            <div className="col">
            <div className="d-flex align-items-start">
                <img src={locationicon} className="" alt="" style={{ width: "48px", height: "48px", marginRight: "15px" }}/>
              </div>
              <h5 className="location-name">CASA </h5>
              <p className="location-body">Surrounded by shopping, cafes, and nightlife
              Indoor games zone and modern gym</p>
            </div>
          </div>

          <div className="pt-4">
            <p className="location-section-text">Each listing includes images, map view, and a “Book a Visit” CTA.</p>
          </div>
        </div>
        <br/>
      </div>
      <br/>
      <Testimonials />
      </>
    );
}