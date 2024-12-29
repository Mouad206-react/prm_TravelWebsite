import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './ContactPage.css'; 

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact-page">
      <div className="container">
        <div className="form-section">
          <div className="form-container">
            <h4>Get in touch</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  placeholder="Enter your e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  className="form-input"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-input"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>

          <div className="contact-info">
            <h4>Contact us</h4>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Address: Dhar Lamhalla Hay Almoukaouama <br /> Oujda, Morocco 60000</p>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <p>Contact: +212 123 456 789</p>
            </div>
            <div className="contact-item">
              <span className="icon">📧</span>
              <p>Email: Travelo@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">🌐</span>
              <p>Website: 
                <Link to="/login" className="website-link">
                  www.Travelo.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
