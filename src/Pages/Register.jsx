import React from "react";
import "../assets/Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Create Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}

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
