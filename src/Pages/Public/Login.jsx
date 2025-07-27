import React, { useState } from "react";
import "../../Styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please register first.");
    } else if (storedUser.email === email && storedUser.password === password) {
      alert("Logged in successfully!");
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back, Traveler!</h2>
          <p>Please log in to continue your journey with us.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
