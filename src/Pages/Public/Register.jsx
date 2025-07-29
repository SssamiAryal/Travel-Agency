import React from "react";
import "../../Styles/Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      navigate("/login");
    } else {
      const resData = await response.json();
      alert(resData.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="quote">
          “Jobs fill your pockets, but adventures fill your soul.”
        </div>
      </div>
      <div className="login-right register-right">
        <div className="login-box register-box">
          <h2>Join JourneyTrekker!</h2>
          <p>Create your account to explore amazing travel deals.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="error">Name is required</p>}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error">Email is required</p>}
            <input
              type="password"
              placeholder="Create Password"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Password is required</p>}
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
            />
            {errors.confirmPassword && (
              <p className="error">Passwords do not match</p>
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
