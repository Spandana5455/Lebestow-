import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Bookyourgame.css';

emailjs.init('i3IukMjtmoeblwAsk'); 

const BookYourGame = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    game: '',
    time_slot: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ah4mkqh', 'template_b6co5nj', formData)
      .then(() => {
        setModalMessage('Your game has been booked successfully!');
        setShowModal(true);
        setFormData({
          first_name: '',
          last_name: '',
          phone: '',
          game: '',
          time_slot: ''
        });
      })
      .catch(() => {
        setModalMessage('Booking failed. Please try again later.');
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="game-header text-center py-4">
        <h2 className="game-header-title">
          Book Your <span className="game-highlight">Game</span>
        </h2>
      </div>

      <Container className="p-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form ref={formRef} onSubmit={handleSubmit} className="game-form-section shadow p-4 rounded">
              <Form.Group className="mb-3">
                <Form.Label className="game-form-label">First Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="game-form-label">Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="game-form-label">Phone Number*</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="game-form-label">Select Game*</Form.Label>
                <Form.Select
                  name="game"
                  value={formData.game}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Snooker">Snooker</option>
                  <option value="Table Tennis">Table Tennis</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="game-form-label">Preferred Time Slot*</Form.Label>
                <Form.Control
                  type="time"
                  name="time_slot"
                  value={formData.time_slot}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="game-button-container">
                <Button type="submit" className="px-4 py-2 game-button w-100">
                  Book Now
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="game-address px-4 mt-5">
        <p style={{ fontSize: "20px" }}><strong>Address</strong></p>
        <p>
          Le Bestow Living Private Limited, Plot No 21,<br />
          Opp Shilparamam, Khanammet, HiTech City,<br />
          Hyderabad, Telangana - 500081
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/lebestowofficial?igsh=MTFxcHFxM3d6amVkcA==" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/share/16NQzeb9Uh/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <p>{modalMessage}</p>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookYourGame;



