import React, { useState } from "react";
import backgroundImage from "../assets/background-barbershop.jpg";
import "./Login.scss";
import UserAPI from "../../api/user";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await UserAPI.login(email, password);
      const token = response.data.token;
      navigate("/home");
      localStorage.setItem("token", token);
      console.log("Login bem-sucedido! Token:", token);
    } catch (err) {}
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome back,</h1>
        <p>Sign in to continue to BarberShop.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Type your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type="password"
                placeholder="Type your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
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
