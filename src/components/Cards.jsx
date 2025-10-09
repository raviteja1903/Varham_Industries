import React from "react";
import "./Cards.css";
import img1 from "../assets/image.png";
import img2 from "../assets/image1.png";
import img3 from "../assets/image2.jpg"
const Cards = () => {
  return (
    <div className="cards-container">
      {/* Image 1 - Mission */}
      <div className="image-card">
        <img src={img1} alt="Mission" />
        <div className="overlay">
          <h3>Our Mission</h3>
          <p>
            To restore the nation’s technological overmatch by creating and
            deploying advanced autonomous systems. We exist to place superior
            capabilities in the hands of the warfighter, faster and more
            affordably than ever before.
          </p>
        </div>
      </div>

      {/* Image 2 - Vision */}
      <div className="image-card">
        <img src={img2} alt="Vision" />
        <div className="overlay">
          <h3>Our Vision</h3>
          <p>
            A future where India’s sovereignty is secured by a decisive
            technological edge. We envision a world where our armed forces can
            deter conflict and achieve their objectives with intelligent,
            networked, and autonomous technology that is always one step ahead
            of the adversary.
          </p>
        </div>
      </div>

      {/* Image 3 - Core Values */}
      <div className="image-card">
        <img src={img3} alt="Core Values" />
        <div className="overlay">
          <h3>Our Core Values</h3>
          <ul>
            <li>
              <strong>Mission First:</strong> We are relentlessly focused on the
              needs of the warfighter and the security of the nation.
            </li>
            <li>
              <strong>Act with Urgency:</strong> We understand that time is the
              most critical resource. We build, test, and deploy at mission
              speed.
            </li>
            <li>
              <strong>Own the Outcome:</strong> We take full responsibility for
              our technology’s performance, from the first line of code to the
              last mile of the battlefield.
            </li>
            <li>
              <strong>Calculated Boldness:</strong> We challenge convention and
              take intelligent risks to create revolutionary capabilities.
            </li>
            {/* <li>
              <strong>Meritocracy of Ideas:</strong> The best solution wins,
              regardless of where it comes from. We foster a culture of open
              debate and intellectual honesty.
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
