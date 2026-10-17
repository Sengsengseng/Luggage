import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGem,
  faLink,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";

import "./BrandStatement.css";

const base = import.meta.env.BASE_URL;

const benefits = [
  {
    title: "PREMIUM SHELL",
    icon: faGem,
  },
  {
    title: "QUICK-SWAP DETAILS",
    icon: faLink,
  },
  {
    title: "TRAVEL MADE PERSONAL",
    icon: faSuitcaseRolling,
  },
];

function BrandStatement() {
  return (
    <section className="brand-statement" id="about">

      <div className="brand-story">

        <div className="brand-story-image">
          <img
            src={`${base}images/why-eastside-left.png`}
            alt="Eastside luggage travel lifestyle"
          />
        </div>

        <div className="brand-story-content">
          <span className="brand-story-eyebrow">
            EASTSIDE
          </span>

          <h2>MEET EASTY</h2>

          <p>
            Our signature mascot brings a playful twist
            to premium travel — because good design
            should never take itself too seriously.
          </p>

          <a
            href="#collections"
            className="brand-story-button"
          >
            DISCOVER THE STORY
            <span>→</span>
          </a>

          <div className="brand-story-stamp">
            TRAVEL
            <br />
            MORE
            <br />
            PERSONALITY.
          </div>
        </div>

        <div className="brand-story-image">
          <img
            src={`${base}images/why-eastside-right.png`}
            alt="Eastside luggage at the airport"
          />
        </div>

      </div>

      <div className="brand-statement-bottom">

        <div className="brand-statement-copy">
          <h3>DESIGNED TO MOVE DIFFERENT.</h3>

          <p>
            From iconic airport dashes to weekend escapes,
            EASTSIDE blends clean design, practical function,
            and a distinct personality that stands out
            without shouting.
          </p>
        </div>

        <div className="brand-benefits">

          {benefits.map((benefit) => (
            <div
              className="brand-benefit"
              key={benefit.title}
            >
              <div className="brand-benefit-icon">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>

              <span>{benefit.title}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default BrandStatement;