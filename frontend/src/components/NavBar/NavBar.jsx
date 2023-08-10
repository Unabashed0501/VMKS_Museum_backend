import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active" className="a">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/map-guide" activeClassName="active" className="a">
            Map Guide
          </NavLink>
        </li>
        <li>
          <NavLink to="/forum" activeClassName="active" className="a">
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink to="/unknown" activeClassName="active" className="a">
            Unknown
          </NavLink>
        </li>
        <li>
          <NavLink to="/users-guide" activeClassName="active" className="a">
            Users Guide
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
