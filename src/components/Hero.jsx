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
              <span>Defence Technology </span>
            </h1>
            <p>
              Varham Industries is a defence technology company focused on
              advanced engineering and modern security systems. We design
              dependable, AI-enabled hardware to address global defence
              challenges, bringing intelligent solutions to the front lines
            </p>
          </div>
        </div>
      </section>

      <section className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <h2>Precision. Intelligence. Sovereignty</h2>
        </div>
        <div className="about-text">
          <p>
            Varham Industries was founded to redefine defence through
            innovation, intelligence and engineering. While traditional systems
            move slowly, we accelerate with precision, operating at the
            intersection of AI, autonomy and mission-critical hardware. We
            create technologies that anticipate threats, adapt to complexity and
            perform in extreme conditions, positioning ourselves not just as
            manufacturers but as strategic partners to nations
          </p>
          <p>
            Our approach combines advanced hardware with an AI-powered software
            backbone to create integrated systems that deliver a decisive
            advantage. We do not wait for requirements; we anticipate threats
            and proactively develop solutions. Our technology strengthens
            defence capabilities across land, air, sea, and cyberspace, ensuring
            complete operational superiority. As a private partner, we are
            committed to building sovereign defence capabilities, providing
            armed forces with the tools they need to deter threats and succeed
            in any scenario
          </p>
          <p style={{textAlign: "center"}}>At Varham, innovation is not an experiment; it is a responsibility </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
