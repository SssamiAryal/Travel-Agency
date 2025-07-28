import React from "react";
import Navbar from "./Navbar";
import "../../Styles/About.css";

function About() {
  return (
    <>
      <Navbar />
      <main className="about-main">
        <section className="about-content">
          <h1>About JourneyTrekker</h1>
          <p>
            JourneyTrekker is your trusted travel companion, dedicated to making
            your adventures unforgettable. With over 25 years of experience, we
            specialize in crafting personalized trips that immerse you in new
            cultures, breathtaking landscapes, and authentic experiences.
          </p>
          <p>
            Whether you're seeking adventure, relaxation, or cultural discovery,
            our expert team ensures seamless planning tailored to your unique
            interests and pace.
          </p>
          <div className="features">
            <div className="feature-item">
              <h3>Expert Guides</h3>
              <p>
                Passionate professionals guiding every step of your journey.
              </p>
            </div>
            <div className="feature-item">
              <h3>Custom Itineraries</h3>
              <p>Trips designed to fit your style and preferences perfectly.</p>
            </div>
            <div className="feature-item">
              <h3>Global Destinations</h3>
              <p>Explore 150+ countries with our trusted global network.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
