import React from "react";
import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

import "./LogOrSign.css"; // CSS file path

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <Login />
      <Signup />
    </div>
  );
};

export default LogOrSign;
