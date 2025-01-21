import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons
import '../css/Footer.css'; // CSS file for styling

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 footer-section">
            <h3>Company</h3>
            <p><a>About Us</a></p>
            <p><a>Contact Us</a></p>
            <p><a>Our Services</a></p>
          </div>
          <div className="col-lg-4 col-md-4 footer-section">
            <h3>Online Shop</h3>
            <ul className="list-unstyled">
              <li><a href="#">Sales</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 footer-section">
            <h3>Contact</h3> {/* Added heading for consistency */}
            <p><FaPhone /> Call us at: +123 456 7890</p>
            <p><FaEnvelope /> Email: nouma@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-top pt-3">
        <p>&copy; 2023 Women's Suit Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;