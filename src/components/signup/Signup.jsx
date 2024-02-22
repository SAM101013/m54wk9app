import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Signup</h3>
      <form>
        <input
          placeholder="username"
          onChange={(e) => changeHandler(e, setUsername)}
        />
        <input
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
