import React from "react";
import "../assets/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back, Traveler!</h2>
          <p>Please log in to continue your journey with us.</p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="register-link">
              Don’t have an account?{" "}
              <span onClick={() => navigate("/register")}>Register here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
