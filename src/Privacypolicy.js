import React from 'react';
import './Privacypolicy.css';
import logo from './images/logo.png'; 


const Privacypolicy = () => {
  return (
    <div className="container my-5">
      <div className="position-relative bg-white p-4 p-md-5 shadow rounded-4 privacypolicy-box overflow-hidden">

        {/* Watermark background logo */}
        <img
          src={logo}
          alt="Logo Watermark"
          className="privacypolicy-logo-bg"
        />

        {/* Title and Divider */}
        <div className="text-center mb-4">
          <h4 className="privacypolicy-heading">Privacy Policy</h4>
          <div className="divider mx-auto mt-3"></div>
        </div>

        {/* Terms List */}
        <ul className="privacypolicy-body position-relative">
          <li>
          At Lebestow, we are deeply committed to protecting your privacy. When you use our services, you trust us with your personal information, and we take that responsibility seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </li>
          <li>
          When you book a space or interact with us, we collect information such as your name, email address, contact number, identification details, and payment information. We also gather data about your stay preferences, communication with our support team, and your activity on our platform to enhance your experience. The primary reason for collecting your information is to manage bookings, provide customer support, process payments, improve our services, and maintain a safe environment for all our guests.
          </li>
          <li>
          We implement strict technical and organizational measures to secure your personal data against accidental or unlawful loss, alteration, unauthorized disclosure, or access. We work only with reputable third-party service providers and require them to adhere to strict data privacy standards. Your information is never sold or rented to third parties for marketing purposes. However, in order to fulfill your booking or support requests, we may share necessary information with trusted partners like payment processors, IT service providers, and legal authorities where required.
          </li>
          <li>
          You have rights over your data, including the right to access, correct, restrict processing, or delete your information. To exercise these rights, please contact us at operations@lebestow.com. We may update this Privacy Policy occasionally to reflect changes in our services or legal obligations. Whenever we make material changes, we will notify you through the platform or other appropriate means.
          </li>
          <li>
          Your trust means everything to us, and we are committed to protecting and respecting your privacy at every step of your journey with Lebestow.
          </li>
        </ul>
      </div>
      <br/>
    </div>
  );
};

export default Privacypolicy;