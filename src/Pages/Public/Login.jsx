import React, { useState } from "react";
import "../../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/api";
import homepageImg from "../../assets/Images/Homepage.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.data.token);
      alert("Logged in successfully");
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div
        className="login-left"
        style={{
          backgroundImage: `url(${homepageImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="quote">
          “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it
          hurts, it even breaks your heart. But that’s okay. The journey changes
          you; it should change you.”
        </div>
      </div>
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
              autoComplete="email"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
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
