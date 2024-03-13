import React from "react";
import "../App.scss";

const Header = ({ loggedIn }) => {
  return (
    <div className="header-wrapper">
      <div className="header-inner-container">
        {loggedIn ? (
          <h1 className="header-title">
            Welcome to my App, {loggedIn.username}!
          </h1>
        ) : (
          <h1 className="header-title">Users</h1>
        )}
      </div>
    </div>
  );
};

export default Header;
