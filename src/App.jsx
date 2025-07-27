import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Private/Home";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import LandingPage from "./Pages/Public/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/LandingPage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
