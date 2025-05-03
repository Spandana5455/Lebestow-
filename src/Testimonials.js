import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import t1 from './images/t1.png';
import t2 from './images/t2.png';
import t3 from './images/t3.png';
import t4 from './images/t4.png';
import t5 from './images/t5.png';
import t6 from './images/t6.png';
import t7 from './images/t7.png';
import t8 from './images/t8.png';
import t9 from './images/t9.png';


const testimonials = [
  { name: "Hema", role: "Customer", review: "Lebstow made my Hyderabad experience seamless. Great food, reliable Wi-Fi, and awesome people.", image: t1, rating: 5 },
  { name: "Vamshi", role: "Customer", review: "A perfect setup for students like me. I never felt alone here.", image: t2, rating: 5 },
  { name: "Krishna Priya", role: "Customer", review: "Best decision I made clean rooms, kind staff, and community vibes.", image: t3, rating: 5 },
  { name: "Sai", role: "Customer", review: "Staying in Hyderabad felt super easy thanks to Lebstow. The food was delicious, the Wi-Fi was always reliable, and the people were genuinely welcoming. It felt like a second home.", image: t4, rating: 4 },
  { name: "Madhuri", role: "Customer", review: "Lebstow took care of everything! I didn't have to worry about food or internet, and the people there were so kind. Perfect for anyone new to the city.", image: t5, rating: 5 },
  { name: "Dharani", role: "Customer", review: "Lebstow took care of everything! I didn't have to worry about food or internet, and the people there were so kind. Perfect for anyone new to the city.", image: t6, rating: 4 },
  { name: "Surekha", role: "Customer", review: "Lebstow made moving to Hyderabad stress-free. Everything just worked - good food, strong Wi-Fi, and a vibe that made me feel welcome from day one.", image: t7, rating: 3 },
  { name: "Vasanth", role: "Customer", review: "As someone new to Hyderabad, Lebstow made life simple. It's rare to find a place where both the environment and the people are so positive and supportive.", image: t8, rating: 5 },
  { name: "Hemanth Sai", role: "Customer", review: "Lebstow is a hidden gem. From tasty food to consistent internet and genuinely nice people - I couldn't have asked for more during my stay.", image: t9, rating: 4 },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
);

const TestimonialCard = ({ t }) => (
  <Card className="testimonial-card text-center p-4 mx-auto">
    <div className="testimonial-top">
      <img src={t.image} alt={t.name} className="profile-img" />
      <div className="testimonial-header">
        <h5 className="mb-1 emp-name">{t.name}</h5>
        <p className="mb-2 emp-role">{t.role}</p>
        <div className="stars text-warning stars">{"★".repeat(t.rating)}</div>
      </div>
    </div>
    <div className="p-3">
      <p className="mb-0 emp-review">"{t.review}"</p>
    </div>
  </Card>
);

const Testimonials = () => {
  const groupedTestimonials = chunkArray(testimonials, 3); 
  return (
    <div className="testimonial-section py-5">
      <Container>
        <h2 className="text-center mb-5 testimonials-head">Hear <span className="testimonials-head-two">From Our Residents</span></h2>

        <Carousel interval={3000} indicators={false} controls={true}>
          {groupedTestimonials.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((t, i) => (
                  <Col key={i} xs={12} md={4} className="mb-4 d-flex justify-content-center">
                    <TestimonialCard t={t} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
