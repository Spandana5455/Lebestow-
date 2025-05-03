import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Cafecontactus.css';

emailjs.init('i3IukMjtmoeblwAsk'); 

const Cafecontactus = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    user_phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xx9xv1p', 'template_mp67bfx', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent ✔️',
          text: 'Your message has been sent successfully!',
          confirmButtonColor: '#4CAF50',
        });
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          user_phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        Swal.fire({
          icon: 'error',
          title: 'Message Not Sent ❌',
          text: 'Something went wrong while sending your message.',
          confirmButtonColor: '#d33',
        });
      });
  };

  return (
    <>
      <div className='talk-to-our-team'>
        <h2 className='talk-to-our-team-one'>Talk To Our <span className='talk-to-our-team-two'>Team</span></h2>
      </div>
      <br />

      <div className='container p-4'>
        <Form className='form-section' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="cafe-form-title">First Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="cafe-form-title">Last Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='pt-4'>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="cafe-form-title">Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="cafe-form-title">Phone Number*</Form.Label>
                <Form.Control
                  type="text"
                  name="user_phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 pt-4">
            <Form.Label className="cafe-form-title">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Please enter your query"
              className='bg-light'
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <div className='cafe-button-custom'>
            <button type="submit" className="px-4 py-2 cafe-button w-100 text-center">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Cafecontactus;
