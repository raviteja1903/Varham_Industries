import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="career-container">
      <span className="career-subtitle">Career</span>
      <h1 className="career-title">Serve a Mission Greater Than Yourself</h1>
      <p className="career-description">
        We are assembling a team of India’s most brilliant engineers, mission
        experts, and builders. At Varham, you won’t be optimizing ad clicks or
        building disposable apps. You will be writing code, designing hardware,
        and building systems that directly contribute to the security and
        sovereignty of our nation. This work matters. We have created a culture
        that rewards speed, innovation, and ownership. If you are driven to
        solve real-world problems and want your work to have a tangible impact
        on national security, your mission starts here.
      </p>

      <div className="career-email">
        <p>Contact us at:</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@varham.com"
          target="_blank"
          rel="noopener noreferrer"
          className="email-link"
        >
          careers@varham.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
