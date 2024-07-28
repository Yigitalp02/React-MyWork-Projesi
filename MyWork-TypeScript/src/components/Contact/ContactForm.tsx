import React from 'react';
import './contact.css';

const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <div className="form-group input-group">
        <input type="text" className="form-control" id="name" placeholder="Name" />
        <span className="text-danger required-star">*</span>
      </div>
      <div className="form-group input-group">
        <input type="email" className="form-control" id="email" placeholder="Email" />
      </div>
      <div className="form-group input-group">
        <input type="tel" className="form-control" id="phone" placeholder="Phone number" />
        <span className="text-danger required-star">*</span>
      </div>
      <button type="submit" className="btn submit-button">Send</button>
    </form>
  );
};

export default ContactForm;
