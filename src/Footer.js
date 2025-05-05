import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import fb from './images/fb.png';        
import instagram from './images/instagram.png';
import footerlogo from './images/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-4 pb-3">
      <div className="container">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <img src={footerlogo} alt="Le Bestow Logo" style={{ height: '90px' }} />
        <h4 className="footerlebestow-heading">Le Bestow Living</h4>
    </div>

        <hr className='footer-hr-custom'/>

        <div className="row text-center text-md-start mt-4">
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <p><Link to="/" className="footer-link">Home</Link></p>
            <p><Link to="/explore/aira" className="footer-link">Explore</Link></p>
            <p><Link to="/zones/co-living" className="footer-link">Zones</Link></p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="footer-heading">Zones</h6>
            <p><Link to="/zones/cafe" className="footer-link">Cafeteria</Link></p>
            <p><Link to="/zones/gaming" className="footer-link">Gaming</Link></p>
            <p><Link to="/zones/co-living" className="footer-link">Co-living</Link></p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Company</h6>
            <p><Link to="/about" className="footer-link">About</Link></p>
            <p className="footer-link">✆ +91 9100009059</p>
            <p className="footer-link">✉ operations@lebestow.com</p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="footer-heading">Legal</h6>
            <p><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></p>
            <p><Link to="/terms" className="footer-link">Terms & Services</Link></p>
            <p><Link to="/cancellation" className="footer-link">Cancellation Policy</Link></p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="footer-heading">Social media</h6>
            <div className="d-flex justify-content-center justify-content-md-start footer-social-icon gap-2 mt-2">
              <a href="https://www.instagram.com/lebestowofficial?igsh=MTFxcHFxM3d6amVkcA==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/share/16NQzeb9Uh/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-white-50 mb-0">© 2022 Le Bestow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


