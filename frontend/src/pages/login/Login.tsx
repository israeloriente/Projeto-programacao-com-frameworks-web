import React, { useEffect, useState } from "react";
import "./Login.scss";
import UserAPI from "../../api/user";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/global/Alert";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [isRegister]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await UserAPI.login(email, password);
      const token = response.data.token;
      navigate("/home");
      localStorage.setItem("token", token);
      Alert.showToast("Login successful!", "success");
      setErrorMessage("");
    } catch (err: any) {
      setErrorMessage(err?.response?.data?.message);
      Alert.simpleAlert("Error", err?.response?.data?.message);
    }
  };

  const register = async (e: any) => {
    e.preventDefault();

    if (!name) {
      Alert.simpleAlert("Error", "Name is required!");
      setErrorMessage("Name is required!");
      return;
    }
    if (!email) {
      Alert.simpleAlert("Error", "Email is required!");
      setErrorMessage("Email is required!");
      return;
    }
    if (!password) {
      Alert.simpleAlert("Error", "Password is required!");
      setErrorMessage("Password is required!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.simpleAlert("Error", "Passwords do not match!");
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await UserAPI.register({
        name,
        email,
        password,
      });
      const token = response.data.token;
      navigate("/home");
      localStorage.setItem("token", token);
      Alert.showToast("Registration successful!", "success");
      setErrorMessage("");
    } catch (err: any) {
      setErrorMessage("Error during registration!");
      if (err?.response?.data?.message?.code === 11000)
        setErrorMessage("Email already registered!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {isRegister ? (
          <form onSubmit={register}>
            <h1>Hi there,</h1>
            <p>Register to BarberShop.</p>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Type your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            </div>
            <div className="input-group">
              <label>Repeat your Password</label>
              <div className="password-container">
                <input
                  type="password"
                  placeholder="Type your Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="signin-button">
              Register
            </button>
            <p className="demo-link">
              Already have an account?{" "}
              <a href="#" onClick={() => setIsRegister(false)}>
                Login
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>Hi there,</h1>
            <p>Sign in to continue to BarberShop.</p>
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="signin-button">
              Login
            </button>
            <p className="demo-link">
              Don’t have an account?{" "}
              <a href="#" onClick={() => setIsRegister(true)}>
                Create an account
              </a>
            </p>
          </form>
        )}
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default Login;
