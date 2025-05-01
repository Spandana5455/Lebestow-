import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contactus.css';

emailjs.init('i3IukMjtmoeblwAsk');

const Contactus = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    user_phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <div className="container">
      <h2 className="contact-heading-lets text-center">Lets <span className="contact-heading">Connect</span></h2>
      <br />
      <div className="row pt-4">
        {/* Contact Information Column */}
        <div className="col-md-6">
          <Col md={5} className="contact-left">
            <h4 className="contact-info-heading mb-4">Contact Information</h4>
            <br />
            <div className="info-item"><i className="bi bi-telephone"></i> 9100009659</div>
            <div className="info-item"><i className="bi bi-envelope"></i> sales.bestowliving@gmail.com</div>
            <div className="info-item"><i className="bi bi-instagram"></i> lebestowofficial</div>
            <div className="info-item"><i className="bi bi-facebook"></i> Le Bestow Living</div>
          </Col>
        </div>

        <div className="vertical-divider d-none d-md-block"></div>

        {/* Contact Form Column */}
        <div className="col-md-6">
          <Col className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label className="form-title">First Name</Form.Label>
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
                    <Form.Label className="form-title">Last Name</Form.Label>
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
                    <Form.Label className="form-title">Email</Form.Label>
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
                    <Form.Label className="form-title">Phone Number</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      required 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3 pt-4">
                <Form.Label className="form-title">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please enter your query"
                  className='bg-light' 
                  required 
                />
              </Form.Group>

              <div className='contact-button-custom'>
                <button type="submit" className="px-4 py-2 contact-button w-100 text-center">
                  Send Message
                </button>
              </div>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Contactus;






