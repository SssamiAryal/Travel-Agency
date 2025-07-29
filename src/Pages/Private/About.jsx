import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../Styles/About.css";

function About() {
  return (
    <>
      <Navbar />
      <main className="about-main">
        <section className="about-content">
          <h1>About JourneyTrekker</h1>
          <p className="tagline">
            Your gateway to unforgettable adventures, crafted with care and
            passion.
          </p>
          <p>
            With over 25 years of expertise, JourneyTrekker is your trusted
            travel companion, offering personalized trips that immerse you in
            the heart of culture, nature, and discovery. Our mission is to turn
            every journey into a story worth telling.
          </p>
          <p>
            From thrilling adventures to serene escapes, our team tailors each
            trip to match your pace, style, and dreams. Let us plan your next
            unforgettable escape.
          </p>
          <div className="features">
            <div className="feature-item">
              <h3>🌍 Global Destinations</h3>
              <p>150+ countries to explore with our trusted global network.</p>
            </div>
            <div className="feature-item">
              <h3>🎯 Custom Itineraries</h3>
              <p>Designed to suit your travel preferences perfectly.</p>
            </div>
            <div className="feature-item">
              <h3>🧭 Expert Guides</h3>
              <p>Friendly, knowledgeable guides every step of your journey.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
