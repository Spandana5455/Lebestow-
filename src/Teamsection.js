import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Teamsection.css';
import teammember from './images/teammember.png';
import teammember1 from './images/teammember1.png';
import teammember2 from './images/teammember2.png';

const teamMembers = [
  {
    name: 'Ramesh',
    title: 'Manager',
    quote: '"We believe home is where people feel seen and supported."',
    image: teammember,
  },
  {
    name: 'Rakesh',
    title: 'Manager',
    quote: '"We believe home is where people feel seen and supported."',
    image: teammember1,
  },
  {
    name: 'Ganesh',
    title: 'Electrical Head',
    quote: '"We believe home is where people feel seen and supported."',
    image: teammember2,
  }
];

const Teamsection = () => {
  const [centerIndex, setCenterIndex] = useState(1); 

  const getClassName = (index) => {
    if (index === centerIndex) return 'member center';
    if (index === (centerIndex + 1) % 3) return 'member right';
    if (index === (centerIndex + 2) % 3) return 'member left';
    return 'member';
  };

  return (
    <div className="rotating-section text-center py-5">
      <h2 className="teamsection-heading">Meet <span className="teamsection-heading-two">the People Behind Le Bestow</span></h2>
      <p className="mb-4 teamsection-body pt-2">
        Our team is passionate about creating safe, social, and sustainable living environments.
      </p>

      <Container className='pt-4 pb-5'>
        <Row className="justify-content-center position-relative">
          <div className="team-wrapper">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={getClassName(index)}
                onClick={() => setCenterIndex(index)}
              >
                <img src={member.image} alt={member.name} className="rounded-circle mb-2 member-image" />
                <h6 className="member-name">{member.name}</h6>
                <p className="mb-1 member-title">{member.title}</p>
                {index === centerIndex && (
                  <p className="member-quote" style={{ fontSize: '0.9rem' }}>
                    {member.quote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Teamsection;
