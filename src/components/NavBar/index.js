import React from "react";
import { Link } from "react-router-dom";
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <nav className="navbar">
        <ul id="menu">
          <li>
            <Link
              to="/home"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
