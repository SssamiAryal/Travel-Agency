import React from "react";
import "../../Styles/Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-wrapper">
      <Navbar />
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’re here to help you craft unforgettable travel experiences.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form-section">
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info-section">
          <h2>JourneyTrekker</h2>
          <p>123 Travel Lane, Kathmandu, Nepal</p>
          <p>Email: support@journeytrekker.com</p>
          <p>Phone: +977-9800000000</p>
          <p>Hours: Mon – Fri, 9:00 AM – 6:00 PM</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
