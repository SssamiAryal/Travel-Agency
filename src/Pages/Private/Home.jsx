import React from "react";
import "../../Styles/Home.css";
import Navbar from "./Navbar";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaCamera,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="animated-heading">Your Adventure Awaits</h1>
          <p className="hero-subtext">
            Discover extraordinary destinations and create unforgettable
            memories with JourneyTrekker's expertly crafted travel experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Destinations</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      <div className="solutions-section">
        <h2>Complete Travel Solutions</h2>
        <p>
          From planning to execution, we handle every detail of your journey so
          you can focus on creating memories.
        </p>
        <div className="solutions-grid">
          <div className="solution-card">
            <FaPlane className="icon" />
            <h3>Flight Booking</h3>
            <p>Best deals on flights worldwide with exclusive partnerships.</p>
          </div>
          <div className="solution-card">
            <FaHotel className="icon" />
            <h3>Hotel Reservations</h3>
            <p>Luxury resorts to boutique stays—tailored for comfort.</p>
          </div>
          <div className="solution-card">
            <FaCar className="icon" />
            <h3>Car Rentals</h3>
            <p>Reliable vehicles with premium service and great rates.</p>
          </div>
          <div className="solution-card">
            <FaCamera className="icon" />
            <h3>Guided Tours</h3>
            <p>Discover hidden gems with expert local guides.</p>
          </div>
          <div className="solution-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Trip Planning</h3>
            <p>Personalized itineraries based on your style and budget.</p>
          </div>
          <div className="solution-card">
            <FaShieldAlt className="icon" />
            <h3>Travel Insurance</h3>
            <p>Full coverage to protect your trip investment.</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Why Choose JourneyTrekker?</h2>
        <p className="info-subtext">
          We are dedicated to delivering personalized and memorable travel
          experiences with exceptional customer service and expert knowledge.
        </p>
        <div className="info-cards">
          <div className="info-card">
            <h3>Experienced Travel Experts</h3>
            <p>
              Our team has years of experience crafting perfect itineraries
              tailored to your interests and budget.
            </p>
          </div>
          <div className="info-card">
            <h3>Customer Satisfaction</h3>
            <p>
              We prioritize your happiness with 24/7 support and flexible travel
              options.
            </p>
          </div>
          <div className="info-card">
            <h3>Best Price Guarantee</h3>
            <p>
              Enjoy competitive pricing through our partnerships with airlines,
              hotels, and service providers.
            </p>
          </div>
          <div className="info-card">
            <h3>Safe and Secure Travel</h3>
            <p>
              We ensure all bookings comply with the highest safety and health
              standards.
            </p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>What Our Travelers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>
              "JourneyTrekker planned my honeymoon perfectly! Every detail was
              seamless and the local guides were amazing."
            </p>
            <span>- Priya Sharma</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Great customer service and fantastic deals. I’ll definitely book
              my next trip here."
            </p>
            <span>- Rajesh Koirala</span>
          </div>
          <div className="testimonial-card">
            <p>
              "From flights to hotels, everything was organized and affordable.
              Highly recommend JourneyTrekker!"
            </p>
            <span>- Anjali Thapa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
