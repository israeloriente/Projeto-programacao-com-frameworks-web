import React from "react";
import backgroundImage from "../assets/background-barbershop.jpg";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome back,</h1>
        <p>Sign in to continue to Lox.</p>
        <button className="google-signin">
          <img src="path/to/google-icon.svg" alt="Google Icon" /> Log in with
          Google
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Type your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input type="password" placeholder="Type your Password" />
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="demo-link">
          Don’t have an account? <a href="#">Book a Demo</a>
        </p>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default Login;
