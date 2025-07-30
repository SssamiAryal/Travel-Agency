import React from "react";
import "../../Styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1 className="animated-text">
            Let's Start Your <span>Journey</span>
          </h1>
          <p className="animated-text delay-1">
            Explore breathtaking places, meet new cultures, and create memories
            that last a lifetime with the world’s trusted travel experts.
          </p>
          <div className="buttons-wrapper">
            <div className="buttons animated-text delay-2">
              <button
                className="btn-primary"
                onClick={() => navigate("/login")}
              >
                Let's Go →
              </button>
            </div>
          </div>
          <div className="stats animated-text delay-3">
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
              <p>Global Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
