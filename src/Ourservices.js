import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import './Ourservices.css';
import services1 from './images/services1.png';
import services2 from './images/services2.png';
import services3 from './images/services3.png';
import services4 from './images/services4.png';
import services5 from './images/services5.png';
import services6 from './images/services6.png';
import services7 from './images/services7.png';
import services8 from './images/services8.png';

const services = [
  { image: services1, title: "Fully Furnished,", desc: "Brand-New Properties" },
  { image: services2, title: "Chef-Prepared Meals", desc: "(3 Times Daily)" },
  { image: services3, title: "Private, Spacious Rooms", desc: "with Premium Furnishings" },
  { image: services4, title: "High-Speed Wi-Fi", desc: "in All Areas" },
  { image: services5, title: "Daily Housekeeping", desc: "" },
  { image: services6, title: "Laundry Facilities", desc: "" },
  { image: services7, title: "Entertainment Lounges", desc: "with TVs & Board Games" },
  { image: services8, title: "Gym & Fitness", desc: "Studio gaming" },
];

const Ourservices = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <Badge bg="" text="" className="mb-3 px-3 py-2 fs-6 our-services">Our Services</Badge>
        <h2 className="mb-3">
          <span className="our-services-heading-two">Everything  </span>
          <span className="our-services-heading">You Need, Already Included</span>
        </h2>
        <p className="mb-5 our-services-body">
          We take care of the details so you can focus on your goals. Your rent includes more than just a <br/>room - it's a full-service living experience.
        </p>
        <Row className="g-4 row-gap">
          {services.map((service, idx) => (
            <Col md={3} sm={6} xs={12} key={idx}>
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid mb-3"
                style={{ height: "80px", objectFit: "contain" }}
              />
              <h6 className="ourservices-title mb-0">{service.title}</h6>
              <p className="ourservices-title">{service.desc}</p>
            </Col>
          ))}
        </Row>
        <p className="mt-5 text-muted">
          <span className="our-services-note">Note:</span>{" "}
          <span className="our-services-note-text">Electricity charges are metered individually and billed based on usage.</span>
        </p>
      </Container>
    </section>
  );
};

export default Ourservices;

