import React from 'react';
import './Cancellationpolicy.css';
import logo from './images/logo.png'; 


const Cancellationpolicy = () => {
  return (
    <div className="container my-5">
      <div className="position-relative bg-white p-4 p-md-5 shadow rounded-4 cancellationpolicy-box overflow-hidden">

        {/* Watermark background logo */}
        <img
          src={logo}
          alt="Logo Watermark"
          className="cancellationpolicy-logo-bg"
        />

        {/* Title and Divider */}
        <div className="text-center mb-4">
          <h4 className="cancellationpolicy-heading">Cancellation Policy</h4>
          <div className="divider mx-auto mt-3"></div>
        </div>

        {/* Terms List */}
        <ul className="cancellationpolicy-body position-relative">
          <li>
          At Lebestow, we understand that plans can change unexpectedly. This Cancellation Policy outlines how cancellations, changes, and refunds are handled for bookings made through our platform.
          </li>
          <li>
          Guests may cancel their booking by contacting our support team via email or through their user dashboard. If you cancel at least [X days] before your scheduled check-in date, you will receive a full refund. Cancellations made between [X and Y days] before check-in may qualify for a 50% refund. If you cancel less than [Y days] before your stay or fail to arrive without prior notice ("no-show"), you will not be eligible for a refund.
          </li>
          <li>
          In rare instances, Lebestow may need to cancel a booking due to unforeseen circumstances, such as safety concerns, property maintenance issues, or force majeure events (natural disasters, government restrictions, etc.). In such cases, we will offer you a full refund or assist you in rescheduling at no additional cost.
          </li>
          <li>
          Certain bookings made under special promotions, last-minute deals, or non-refundable offers are exempt from the standard cancellation terms and will be clearly marked as non-refundable at the time of booking.
          </li>
          <li>
          Refunds will be processed back to your original method of payment within [7 to 14 business days] after cancellation confirmation. We are not responsible for any delays caused by third-party payment processors or banks.
          </li>
          <li>
          For any questions about cancellations or if you need help modifying your reservation, please contact our support team. Our goal is to make your experience as smooth and worry-free as possible, even when plans change.
          </li>
        </ul>
      </div>
      <br/>
    </div>
  );
};

export default Cancellationpolicy;