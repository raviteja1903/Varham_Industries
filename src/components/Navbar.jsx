import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Varham Industries</div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="mission" smooth={true} duration={500} offset={-70}>
            Mission & Vision
          </Link>
        </li>
        <li>
          <Link to="capabilities" smooth={true} duration={500} offset={-70}>
            Our Capabilities
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
