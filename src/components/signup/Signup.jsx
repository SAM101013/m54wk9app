import React, { useState } from "react";

const signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e, setter) => {
    setter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="email"
          onChange={(e) => changeHandler(e, setEmail, email)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default signup;
