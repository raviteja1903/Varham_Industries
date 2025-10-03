import React from "react";
import "./Hero.css";
 import "./AboutUs.css";

const Hero = () => {
 return (
    <>
     
      <section className="hero-section">
        
        <div className="text-start">
          <img
            src="https://varhamindustries.com/wp-content/uploads/2025/07/Group-884229.png"
            alt="Varham Industries Logo"
            className="hero-logo"
          />
        </div>
 
        <div className="hero-intro">
          <div>
            <h1>
              Building the Future of <br />
              <span>India’s Defence</span>
            </h1>
            <p>
              Varham Industries is a defence technology company rebooting the
              arsenal of democracy. We build advanced, software-defined hardware
              to solve the most critical national security challenges, putting
              cutting-edge autonomous capabilities in the hands of the warfighter.
            </p>
          </div>
        </div>
      </section>
 
      <section className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <h2>Engineering for National Security</h2>
        </div>
        <div className="about-text">
          <p>
            Varham Industries was founded to radically transform India’s defence
            capabilities. Traditional defence procurement is too slow, too
            expensive, and too siloed for the modern era. We operate differently.
            By combining the agility and innovation of a technology startup with
            the discipline of a mission-focused prime, we are building the future
            of deterrence. Our approach fuses advanced hardware with an AI-powered
            software backbone, creating integrated systems that deliver an
            asymmetric advantage. We don’t wait for requirements; we anticipate
            threats and proactively develop solutions. We are a private partner
            committed to building India’s sovereign defence capability, ensuring
            the Indian Armed Forces have the technology needed to deter and win.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
