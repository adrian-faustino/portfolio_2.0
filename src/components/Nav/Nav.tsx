import React from "react";
/* Styles */
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <ul className="Nav__links-container">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>

      <hr className="Nav__underline" />
    </div>
  );
};

export default Nav;
