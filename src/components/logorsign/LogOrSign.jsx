import React from "react";
import Signup from "../signup/Signup.jsx";
import Login from "../login/login.jsx";
import "../logorsign/LogOrSign.css";
import apiRoutes from "../../utils/apiRoutes";

const LogOrSign = ({ setLoggedIn }) => {
  const handleSignup = async (userData) => {
    try {
      const response = await apiRoutes.signupUser(userData);
      console.log("Signup response:", response);
      // Optionally handle success - e.g., setLoggedIn(true)
    } catch (error) {
      console.error("Signup failed:", error);
      // Optionally handle error - e.g., show error message to user
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await apiRoutes.loginUser(userData);
      console.log("Login response:", response);
      // Optionally handle success - e.g., setLoggedIn(true)
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally handle error - e.g., show error message to user
    }
  };

  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <div className="logorsign-box">
          <Signup handleSignup={handleSignup} />
          {/* Pass the handleSignup function to the Signup component */}
        </div>
        <div className="logorsign-box">
          <Login handleLogin={handleLogin} setLoggedIn={setLoggedIn} />
          {/* Pass the handleLogin function and setLoggedIn function to the Login component */}
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
