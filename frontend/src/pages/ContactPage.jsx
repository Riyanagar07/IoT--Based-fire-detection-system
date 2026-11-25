import React from 'react';
import { Mail, Phone, MapPin, Shield, Flame, Siren } from 'lucide-react';
import './ContactPage.css';

/**
 * Contact Page
 * Emergency contacts and team information
 */
const ContactPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact & Emergency</h1>
        <p>Reach out to us or contact emergency services immediately</p>
      </div>

      <div className="contact-grid">
        {/* Emergency Services */}
        <div className="contact-card emergency-card">
          <div className="contact-card-header">
            <Siren size={24} color="#e74c3c" />
            <h3>Emergency Services</h3>
          </div>
          <ul className="contact-list">
            <li>
              <Flame size={18} color="#e74c3c" />
              <span className="contact-label">Fire Brigade</span>
              <span className="contact-value emergency-value">101</span>
            </li>
            <li>
              <Shield size={18} color="#3498db" />
              <span className="contact-label">Police Helpline</span>
              <span className="contact-value emergency-value">100</span>
            </li>
            <li>
              <Siren size={18} color="#27ae60" />
              <span className="contact-label">Ambulance</span>
              <span className="contact-value emergency-value">108</span>
            </li>
          </ul>
        </div>

        {/* Contact Team */}
        <div className="contact-card">
          <div className="contact-card-header">
            <Mail size={24} color="#e74c3c" />
            <h3>Contact Our Team</h3>
          </div>
          <ul className="contact-list">
            <li>
              <Mail size={18} color="#7f8c8d" />
              <span className="contact-label">Email</span>
              <a href="mailto:haatcoders@gmail.com" className="contact-link">
                haatcoders@gmail.com
              </a>
            </li>
            <li>
              <Phone size={18} color="#7f8c8d" />
              <span className="contact-label">Support Phone</span>
              <span className="contact-value">+91 98765 43210</span>
            </li>
            <li>
              <MapPin size={18} color="#7f8c8d" />
              <span className="contact-label">Address</span>
              <span className="contact-value">Kanelijo Tech Park, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Safety Message */}
      <div className="safety-banner">
        <Shield size={32} color="#27ae60" />
        <div>
          <h3>Your Safety, Our Priority</h3>
          <p>
            In case of fire or gas leak, evacuate immediately and call emergency services.
            Do not rely solely on monitoring systems during active emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
