import React from "react";
import Signup from "../signup/Signup";
import Login from "../login/login";
import axios from "axios";
import "./LogOrSign.css";

const LogOrSign = ({ setLoggedIn }) => {
  const backendUrl = process.env.REACT_APP_API_URL;

  const signupUser = async (userData) => {
    try {
      // Make POST request to backend signup route
      const response = await axios.post(`${backendUrl}/users/signup`, userData);
      console.log(response.data); // Optionally, log the response data
      // Handle success - e.g., setLoggedIn(true)
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle error
    }
  };

  const loginUser = async (userData) => {
    try {
      // Make POST request to backend login route
      const response = await axios.post(`${backendUrl}/users/login`, userData);
      console.log(response.data); // Optionally, log the response data
      // Handle success - e.g., setLoggedIn(true)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error
    }
  };

  return (
    <div className="logorsign-wrapper">
      <div className="logorsign-inner-container">
        <div className="logorsign-box">
          <Signup signupUser={signupUser} />{" "}
          {/* Pass the signupUser function to the Signup component */}
        </div>
        <div className="logorsign-box">
          <Login loginUser={loginUser} setLoggedIn={setLoggedIn} />{" "}
          {/* Pass the loginUser function and setLoggedIn function to the Login component */}
        </div>
      </div>
    </div>
  );
};

export default LogOrSign;
