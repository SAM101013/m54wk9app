import React, { useState } from "react";
import apiRoutes from "../../utils/apiRoutes"; // Import apiRoutes

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the loginUser method from apiRoutes
      const data = await apiRoutes.loginUser({ username, password });
      console.log("Login success: ", data);
      setLoggedIn(data); // Assuming data contains user information
    } catch (error) {
      console.error("Login failed: ", error);
      // Handle login failure
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-inner-container">
        <h3 className="signup-title">Login</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="signup-input"
            placeholder="Username"
            value={username}
            onChange={(event) => changeHandler(event, setUsername)}
          />
          <input
            className="signup-input"
            placeholder="Password"
            value={password}
            onChange={(event) => changeHandler(event, setPassword)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
