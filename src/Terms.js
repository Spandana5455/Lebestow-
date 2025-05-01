import React from 'react';
import './Terms.css';
import logo from './images/logo.png'; 


const TermsAndConditions = () => {
  return (
    <div className="container my-5">
      <div className="position-relative bg-white p-4 p-md-5 shadow rounded-4 terms-box overflow-hidden">

        {/* Watermark background logo */}
        <img
          src={logo}
          alt="Logo Watermark"
          className="terms-logo-bg"
        />

        {/* Title and Divider */}
        <div className="text-center mb-4">
          <h4 className="terms-heading">Terms And Conditions</h4>
          <div className="divider mx-auto mt-3"></div>
        </div>

        {/* Terms List */}
        <ul className="terms-body position-relative">
          <li>
          Welcome to Lebestow! These Terms and Conditions govern your access to and use of our services, including bookings, stays, and other interactions with our platform. Please read them carefully, as they constitute a legally binding agreement between you and Lebestow.
          </li>
          <li>
          By using our platform, you confirm that you are at least 18 years old and capable of entering into binding contracts. When you make a booking, you agree to provide accurate and complete information. All payments must be made in advance or according to the payment schedule communicated at the time of booking. Failure to pay on time may result in the cancellation of your reservation.
          </li>
          <li>
          You agree to use the properties booked through Lebestow responsibly and respectfully. This includes complying with house rules, avoiding illegal activities, and respecting the rights of neighbors and other residents. Any violation of these obligations may lead to immediate cancellation of your booking without refund and may expose you to additional liability for damages.
          </li>
          <li>
          All content, branding, and intellectual property on our platform belong to Lebestow or our licensors. You agree not to copy, modify, distribute, or exploit our materials without prior written permission.
          </li>
          <li>
          Our liability to you is limited. We are not responsible for indirect, incidental, or consequential damages resulting from your use of the platform or any booking. Additionally, we reserve the right to suspend or terminate your account or bookings if we believe you have violated these Terms or if your behavior threatens the safety or comfort of others.
          </li>
          <li>
          These Terms and Conditions are governed by the laws of Legal authority, without regard to its conflict of law principles. By using our services, you submit to the exclusive jurisdiction of courts located. 
          </li>
        </ul>
      </div>
      <br/>
    </div>
  );
};

export default TermsAndConditions;
