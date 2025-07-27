import React from "react";
import Navbar from "./Navbar";
import "../../Styles/About.css";

function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="container">
          <h2>About JourneyTrekker</h2>
          <p>
            At JourneyTrekker, we believe travel is more than just seeing new
            places — it’s about immersing yourself in different cultures,
            meeting new people, and creating memories that last a lifetime. Our
            mission is to provide expertly curated travel experiences tailored
            to your interests and desires.
          </p>
          <p>
            With over 25 years of experience, we combine passion with
            professionalism to make every trip seamless, exciting, and
            unforgettable. Whether you seek adventure, relaxation, or cultural
            exploration, JourneyTrekker is your trusted travel partner.
          </p>
          <div className="values">
            <div className="value-item">
              <h3>Trusted Experts</h3>
              <p>
                Dedicated travel professionals committed to your perfect trip.
              </p>
            </div>
            <div className="value-item">
              <h3>Personalized Trips</h3>
              <p>
                Custom itineraries designed to fit your unique interests and
                pace.
              </p>
            </div>
            <div className="value-item">
              <h3>Global Reach</h3>
              <p>
                Explore over 150 countries with our extensive network worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
