import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="career-container">
      <span className="career-subtitle">Career</span>
      <h1 className="career-title">Serve a Mission Greater Than Yourself</h1>
      <p className="career-description">
        Working at Varham Industries means serving a mission far beyond
        conventional technology. The systems we build directly influence
        national defence and global security, reinforcing the objectives of
        those who safeguard peace and stability. This is not an environment for
        consumer applications or routine platforms; it is where advanced systems
        are engineered to support strategic deterrence and operational
        superiority.
        <br />
        We operate with discipline, urgency and purpose. Every individual is
        expected to take ownership, uphold accountability and push the limits of
        capability. Our culture is built on trust, precision and an
        uncompromising commitment to excellence, driven by the responsibility to
        secure the future.
      </p>

      <div className="career-email">
        <p>
          Contact for Careers:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@varhamindustries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            careers@varhamindustries.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
