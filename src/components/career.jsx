import React from "react";
import "./Career.css";

const Career = () => {
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
 
      <form className="career-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Email *" required />
        </div>
        <textarea placeholder="Any Comments" rows="5" required></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Career;
