import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      {/* Card 1 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <span className="tag">Our Mission</span>
            <p>
              To restore the nation’s technological overmatch by creating and
              deploying advanced autonomous systems. We exist to place superior
              capabilities in the hands of the warfighter, faster and more
              affordably than ever before.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <span className="tag">Our Vision</span>
            <p>
              A future where India’s sovereignty is secured by a decisive
              technological edge. We envision a world where our armed forces can
              deter conflict and achieve their objectives with intelligent,
              networked, and autonomous technology that is always one step ahead
              of the adversary.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <span className="tag">Our Core Values</span>
            <ul>
              <li> Mission First: We are relentlessly focused on the needs of the warfighter and the security of the nation.</li>
              <li>Act with Urgency: We understand that time is the most critical resource. We build, test, and deploy at mission speed.</li>
              <li>Own the Outcome: We take full responsibility for our technology’s performance, from the first line of code to the last mile of the battlefield.</li>
              <li>Calculated Boldness: We challenge convention and take intelligent risks to create revolutionary capabilities.</li>
              <li> Meritocracy of Ideas: The best solution wins, regardless of where it comes from. We foster a culture of open debate and intellectual honesty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
