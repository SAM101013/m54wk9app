import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };
  return (
    <div>
      <h3>Singup</h3>

      <form>
        <input placeholder="username" onChange={(e) => changeHandler} />
        <input placeholder="password" />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
