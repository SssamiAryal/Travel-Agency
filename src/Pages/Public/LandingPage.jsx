import React from "react";
import "../../Styles/LandingPage.css"; // Adjust the path if needed
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>
            Let's Start Your <span>Journey</span>
          </h1>
          <p>
            Discover breathtaking destinations, create unforgettable memories,
            and embark on adventures that will transform your perspective on the
            world.
          </p>
          <div className="buttons">
            <button className="btn-primary" onClick={() => navigate("/login")}>
              Let's Go →
            </button>
            <button className="btn-secondary">Watch Story ▶</button>
          </div>
          <div className="stats">
            <div>
              <h3>150+</h3>
              <p>Countries</p>
            </div>
            <div>
              <h3>50K+</h3>
              <p>Happy Travelers</p>
            </div>
            <div>
              <h3>25+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
