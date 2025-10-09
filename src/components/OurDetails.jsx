import React from "react";
import "./OurDetails.css";

const capabilitiesData = [
  {
    title: "Autonomous Counter-UAS Robotics",
    description:
      "Fully integrated robotic system for dynamic air defense. Detects, classifies, and tracks hostile UAS threats even in complex environments.",
    features: [
      {
        label: "Autonomous Deployment",
        text: "When a threat is identified, robotic effectors (drones or energy systems) are autonomously deployed via VAJRA OS.",
      },
      {
        label: "Outcome",
        text: "Ensures rapid and effective airspace denial with minimal human intervention.",
      },
    ],
  },
  {
    title: "Persistent ISR Robotics",
    description:
      "Integrated ISR robotic systems for continuous surveillance and threat neutralization with minimal human control.",
    features: [
      {
        label: "Autonomous Operation",
        text: "Sensing platforms and effectors work together autonomously to detect and neutralize targets.",
      },
      {
        label: "Outcome",
        text: "Maintains real-time situational awareness and persistent monitoring.",
      },
    ],
  },
  {
    title: "Autonomous Ground Robotics (AGR)",
    description:
      "Rugged, modular, and intelligent ground robots for logistics, patrol, or combat support in any terrain.",
    features: [
      {
        label: "Capabilities",
        text: "Handles resupply, patrol, and EOD missions using advanced locomotion and perception systems.",
      },
    ],
  },
  {
    title: "Networked Autonomous Munitions",
    description:
      "Expendable robotic munitions powered by VAJRA OS, designed for mass deployment and coordinated precision strikes.",
    features: [
      {
        label: "VAJRA OS Command",
        text: "Munitions network dynamically to share targeting data and execute collaborative missions.",
      },
    ],
  },
];

const OurDetails = () => {
  return (
    <div className="ourcapabilities">
      <span className="section-subtitle">Our Capabilities</span>
      <h1 className="section-title">
        A Unified Family of Smart Robots Powered by VAJRA OS
      </h1>
      <p className="section-description">
        VAJRA OS — the brain behind our robotic ecosystem — enables autonomous
        collaboration and mission execution with unprecedented precision and
        scale.
      </p>

      <div className="capabilities-grid">
        {capabilitiesData.map((item, index) => (
          <div
            key={index}
            className="capability-card neon-float"
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <div className="card-glow"></div>
            <h2>{item.title}</h2>
            <p className="cap-desc">{item.description}</p>
            <ul>
              {item.features.map((f, i) => (
                <li key={i}>
                  <strong>{f.label}:</strong> {f.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDetails;
