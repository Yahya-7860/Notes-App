import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS Folder/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="WelcomeText_0">Welcome to Notes App</h1>
        <p className="WelcomeText">
          Your personal place to keep track of your thoughts and tasks.
        </p>
        <div className="button-group">
          <button className="btn btn-login" onClick={handleLogin}>
            Login
          </button>
          <button className="btn btn-register" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
