import React from "react";
import "./navStyle.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="NavbarItems">
        <h1>
          <Link className="logo" to="/">
            Home Appliances
          </Link>
        </h1>
        <ul className="nav-menu">
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-links">Cart Items</Link>
          </li>
        </ul>
        <div className="button">
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
          <Link to="/signin" className="btn btn-si">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
