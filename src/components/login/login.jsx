import { useState } from "react";

import { loginFetch } from "../../utils/fetch";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginFetch(username, password);
    console.log("hello: ", data);
    await setLoggedIn(data.user);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-inner-container">
        <h3 className="signup-title">Login</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="signup-input"
            placeholder="Username"
            onChange={(event) => changeHandler(event, setUsername, username)}
          />
          <input
            className="signup-input"
            placeholder="Password"
            onChange={(event) => changeHandler(event, setPassword, password)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
