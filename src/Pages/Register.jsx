import React from "react";
import "../assets/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-left"></div>
      <div className="register-right">
        <div className="register-box">
          <h2>Join JourneyTrekker!</h2>
          <p>Create your account to explore amazing travel deals.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Create Password" required />
            <button type="submit">Register</button>
            <p className="login-link">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
