import React from "react";
import "./OurCapabilities.css"

const OurCapabilities = () => {
  return (
    <div className="ourcapabilities">
      <span className="section-subtitle">Our Capabilities</span>
      <h1 className="section-title">
        A Unified Family of Smart Robots Powered by VAJRA OS
      </h1>

      <p className="section-description">
        At the heart of our ecosystem is VAJRA OS, an AI-powered command and
        control platform. VAJRA fuses data from our network of robotic sensors
        and effectors into a single, intuitive operating picture, allowing human
        operators to command intelligent systems across any domain with
        unprecedented precision and scale. It’s the brain behind the brawn,
        enabling autonomous collaboration and dynamic mission execution.
      </p>
 
      <h2 className="subsection-title">Autonomous Counter-UAS Robotics</h2>
      <ul className="capabilities-list">
        <li>
          <strong>Description:</strong> A fully integrated robotic system
          designed for dynamic air defense. This solution comprises autonomous
          sensing platforms that employ advanced perception algorithms to detect,
          classify, and track hostile UAS threats, even in complex environments.
        </li>
        <li>
          <strong>Autonomous Deployment:</strong> When a threat is identified,
          robotic effectors (such as high-precision interception drones or
          directed energy systems) are autonomously deployed and tasked via
          VAJRA OS to neutralize the target.
        </li>
        <li>
          <strong>Outcome:</strong> Ensures rapid and effective airspace denial
          with minimal human intervention.
        </li>
      </ul>
 
      <h2 className="subsection-title">Persistent ISR (Intelligence, Surveillance, & Reconnaissance) Robotics</h2>
      <ul className="capabilities-list">
        <li>
          <strong>Description:</strong> A fully integrated robotic system
          designed for dynamic air defense. Autonomous sensing platforms employ
          advanced perception algorithms to detect, classify, and track hostile
          UAS threats, even in complex environments.
        </li>
        <li>
          <strong>Autonomous Deployment:</strong> Robotic effectors (high-precision
          interception drones or directed energy systems) are autonomously
          deployed and tasked via VAJRA OS to neutralize targets.
        </li>
        <li>
          <strong>Outcome:</strong> Ensures rapid and effective surveillance and
          threat neutralization with minimal human intervention.
        </li>
      </ul>

       <h2 className="subsection-title">Multi-Mission Autonomous Ground Robotics (AGR)</h2>
      <ul className="capabilities-list">
        <li>
          <strong>Description:</strong> These are the workhorses of the future battlefield. Our AGRs are rugged, intelligent, and highly modular robotic platforms designed for a multitude of dangerous and dull tasks.
        </li>
        <li>
          <strong>Autonomous Resupply & Patrol:</strong> Autonomous resupply convoys traverse hostile territory. Robotic perimeter patrol with integrated threat detection in austere environments.
        </li>
        <li>
          <strong>Unmanned Combat & EOD:</strong> Support in close quarters or Explosive Ordnance Disposal (EOD) missions, extending human reach and safety.
        </li>
        <li>
          <strong>Capabilities:</strong> Leverages advanced locomotion, manipulation, and perception to operate effectively in austere environments.
        </li>
      </ul>

    
      <h2 className="subsection-title">Networked Autonomous Munitions</h2>
      <ul className="capabilities-list">
        <li>
          <strong>Description:</strong> Cost-effective, intelligent robotic munition systems designed for mass deployment and precise engagement.
        </li>
        <li>
          <strong>Autonomous & Expendable:</strong> Unlike traditional munitions, these are sophisticated, expendable autonomous agents that can be air or ground launched.
        </li>
        <li>
          <strong>VAJRA OS Command:</strong> Powered by VAJRA OS, they dynamically network to share targeting data, identify optimal engagement parameters, and collaboratively execute complex strike missions.
        </li>
        <li>
          <strong>Outcome:</strong> Overwhelm adversaries with distributed, intelligent firepower against armored formations, air defenses, or high-value targets.
        </li>
      </ul>
    </div>
  );
};

export default OurCapabilities;
