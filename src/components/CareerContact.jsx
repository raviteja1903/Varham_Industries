import React from "react";
 import "./CareerContact.css";

const CareerInfo = () => {
  return (
    <div className="career-info-container01">
      <h2 className="career-info-heading01">
        <span className="career-info-blue01">Contact</span>
      </h2>

      <h3 className="career-info-subtitle01">Connect with Varham Industries</h3>

      <p className="career-info-description01">
        Varham is focused on developing defence technology that strengthens security and resilience.
        We are open to future collaboration with government agencies, defence organizations, and
        private innovators. Our interest lies in research projects, technology development, and
        partnerships that contribute to effective defence systems and support stable and secure
        operations across nations.
      </p>

      <p className="career-info-office01">
        <strong>Corporate Office:</strong> Varham Industries Pvt. Ltd. Hyderabad, Telangana, India
      </p>

      <p className="career-info-email01">
        Contact us at{" "}
        <a
          href="mailto:contact@varhamindustries.com"
          className="career-info-email-link01"
        >
          contact@varhamindustries.com
        </a>
      </p>
    </div>
  );
};

export default CareerInfo;
