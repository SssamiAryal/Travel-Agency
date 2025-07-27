import React from "react";
import "../../Styles/Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser } from "../../Services/api";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data);
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="quote">
          “Jobs fill your pockets, but adventures fill your soul.”
        </div>
      </div>
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
            {errors.name && <p className="error">{errors.name.message}</p>}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input
              type="password"
              placeholder="Create Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <button type="submit">Register</button>
            <button
              type="button"
              className="btn-back"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
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
