import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Emergency Contacts */}
          <div className="footer-section">
            <h4 className="footer-title">Emergency Contacts</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="item-label">Fire Brigade</span>
                <span className="item-value">101</span>
              </li>
              <li className="footer-item">
                <span className="item-label">Police Helpline</span>
                <span className="item-value">100</span>
              </li>
              <li className="footer-item">
                <span className="item-label">Ambulance</span>
                <span className="item-value">108</span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="item-label">Email</span>
                <a href="mailto:haatcoders@gmail.com" className="footer-link">
                  haatcoders@gmail.com
                </a>
              </li>
              <li className="footer-item">
                <span className="item-label">Phone</span>
                <span className="item-value">+91 98765 43210</span>
              </li>
              <li className="footer-item">
                <span className="item-label">Address</span>
                <span className="item-value">Kanelijo Tech Park, India</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-list">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/cancellation" className="footer-link">Cancellation & Refunds</a></li>
              <li><a href="/shipping" className="footer-link">Shipping & Delivery</a></li>
            </ul>
          </div>

          {/* Brand Info */}
          <div className="footer-section">
            <h4 className="footer-title">About FireGuard</h4>
            <p className="footer-about">
              Advanced IoT-based fire detection and monitoring system designed to keep your premises safe around the clock.
            </p>
            <p className="footer-slogan">Your Safety, Our Priority</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-branding">
            Made with <span className="heart">💖</span> by HAAT Coders
          </p>
          <p className="footer-copyright">
            © 2026 Kanelijo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
