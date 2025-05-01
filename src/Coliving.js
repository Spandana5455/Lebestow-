import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Coliving.css';
import colivingimg1 from './images/colivingimg1.png';
import colivingimg2 from './images/colivingimg2.png';
import colivingimg3 from './images/colivingimg3.png';
import colivingimg4 from './images/colivingimg4.png';
import no1 from './images/no1.png';
import no2 from './images/no2.png';
import no3 from './images/no3.png';
import arrow from './images/arrow.png';
import aira from './images/aira.png';
import bhuvan from './images/bhuvan.png';

const colivingData = [
    {
      name: 'AIRA',
      image:aira,
      link: '/explore/aira'
    },
    {
      name: 'BHUVAN',
      image: bhuvan,
      link: '/explore/bhuvan'
    }
];
const Coliving = () => {
    return (
        <>
        <div className="coliving-section">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-6">
                        <h3 className="coliving-heading">"Live Better, Together — <br/><span className="coliving-subheading">Discover Your Perfect Space to Belong."</span></h3>
                        <p className="coliving-body">Experience community-driven living with fully furnished rooms, premium amenities, and simple monthly payments.</p>
                    </div>

                    <div className="col-6">
                        <img src={colivingimg1} className='colivingimg1' alt='colivingimg1'/>
                    </div>
                </div>
            </div>
        </div>
        <br/>

        <div className="how-coliving-works-section">
            <div className="container">
                <h2 className="how-coliving-works-heading pt-4">How Co-Living Works</h2>
                <p className="how-coliving-works-body">Finding your next home has never been easier. With our co-living spaces, you enjoy freedom, <br/>comfort, and connection - without the burden of long-term commitments.</p>
                <Row className="text-center steps-row p-4">
                    <Col md={3} className="mb-4">
                    <div className="step-number"><img src={no1} className='no1-image' alt='no1-image'/></div>
                    <h5 className="step-heading">Choose Your Space</h5>
                    <p className="step-body">Select from men's, women's, or mixed-gender living spaces at your preferred location.</p>
                    </Col>
                    <Col md={1} className="d-none d-md-block"><img src={arrow} className="arrow-image" alt="arrow" /></Col>
                    <Col md={3} className="mb-4">
                    <div className="step-number"><img src={no2} className='no2-image' alt='no2-image'/></div>
                    <h5 className="step-heading">Pay Monthly</h5>
                    <p className="step-body">No leases, no lock-ins. Just easy monthly payments covering everything.</p>
                    </Col>
                    <Col md={1} className="d-none d-md-block"><img src={arrow} className="arrow-image" alt="arrow" /></Col>
                    <Col md={3} className="mb-4">
                    <div className="step-number"><img src={no3} className='no3-image' alt='no3-image'/></div>
                    <h5 className="step-heading">Move In and Start Living</h5>
                    <p className="step-body">Enjoy your private room, meet your community, and live life your way.</p>
                    </Col>
                </Row>
            </div>
        </div>

        <div className="container text-center p-4">
            <h2 className="space-fits-you-heading-one">Choose <span className="space-fits-you-heading-two">the Space That Fits You</span></h2>
            <p className="space-fits-you-body">Whether you're looking for a private retreat or a vibrant community vibe, we<br/> offer tailored spaces to match your lifestyle.</p>

            <div className="row pt-4">
                <div className="col-6">
                    <h2 className="menstay-heading">Men's Stay</h2>
                    <p className="menstay-body">Private rooms and shared spaces exclusively for men, designed for comfort, privacy, and connection.</p>
                </div>
                <div className="col-6">
                    <img src={colivingimg2} className='menstay-img' alt='colivingimg2'/>
                </div>

                <div className="col-6">
                    <img src={colivingimg3} className='womenstay-img' alt='colivingimg3'/>
                </div>
                <div className="col-6">
                    <h2 className="womenstay-heading">Women's Stay</h2>
                    <p className="womenstay-body">Secure, thoughtfully designed women-only spaces with access to all community amenities.</p>
                </div>

                <div className="col-6">
                    <h2 className="colivingstay-heading">Co-living</h2>
                    <p className="colivingstay-body">Inclusive living with a diverse community, perfect for those who enjoy a vibrant, collaborative atmosphere.</p>
                </div>
                <div className="col-6">
                    <img src={colivingimg4} className='coliving-img' alt='colivingimg4'/>
                </div>
            </div>
        </div>

        <div className="container text-center">
            <h2 className="available-heading">Available At</h2>

            <Container className="py-5">
      <Row className="justify-content-center">
        {colivingData.map((place, index) => (
          <Col md={5} className="mb-4 mx-2" key={index}>
            <Card className="rounded-4 airabhuvan-card">
              <Card.Img variant="top" src={place.image} className="airabhuvan-image" />
              <Card.Body className="text-center">
                <Card.Title>
                  <span className='airabhuvan-title-one'>Le Bestow</span> <span className='airabhuvan-title-two'>Co-living</span>
                </Card.Title>
                <h5 className="mt-2" style={{ fontWeight: 'bold' }}>{place.name}</h5>
                <Link to={place.link}><Button className="mt-3 rounded-pill airabhuvan-details">See Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
        </div>

        <div className='lifeatlebestow-section'>
            <div className='container'>
                <h2 className='lifeatlebestow-heading'>Life at Le Bestow</h2>
                <div className='row'>
                    <div className='col-6'>
                        <img src={aira} className='lifeatlebestow-image' alt='lifeatlebestow-image' />
                    </div>
                    <div className='col-6'>
                        <h5 className='lifeatlebestow-head'>More Than a Room - A Way of Life</h5>
                        <p className='lifeatlebestow-body'>Step beyond just living. Dive into curated experiences like gaming tournaments, fitness challenges, and cafe meetups, all within your co-living community.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Coliving;