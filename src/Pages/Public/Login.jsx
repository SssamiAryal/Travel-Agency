import React, { useState, useEffect } from "react";
import "../../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import homepageImg from "../../assets/Images/Homepage.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const quotes = [
    {
      text: "Travel is the only thing you buy that makes you richer.",
      color: "#8B5E3C",
      font: "'Merriweather', serif",
    },
    {
      text: "Adventure awaits — go find it.",
      color: "#A9746E",
      font: "'Georgia', serif",
    },
    {
      text: "The world is a book and those who do not travel read only one page.",
      color: "#C19A6B",
      font: "'Palatino Linotype', serif",
    },
    {
      text: "Life is short and the world is wide.",
      color: "#A0522D",
      font: "'Times New Roman', serif",
    },
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

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
      <div
        className="login-left"
        style={{
          backgroundImage: `url(${homepageImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="quote"
          style={{
            color: quotes[currentQuote].color,
            fontFamily: quotes[currentQuote].font,
          }}
        >
          {quotes[currentQuote].text}
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
