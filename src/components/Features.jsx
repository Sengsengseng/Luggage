import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDharmachakra,
  faArrowsRotate,
  faLock,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

import "./Features.css";


const features = [
  {
  title: "REMOVABLE WHEELS",
  description: "Detach and reattach in under 10 seconds.",
  icon: faDharmachakra,
},
  {
    title: "SMOOTH SPINNER RIDE",
    description: "360° glide with stable, quiet movement.",
    icon: faArrowsRotate,
  },
  {
    title: "SECURE TRAVEL",
    description: "Integrated TSA-approved lock for peace of mind.",
    icon: faLock,
  },
  {
    title: "CABIN READY",
    description: "Smart proportions designed for modern travel.",
    icon: faPlane,
  },
];


function Features() {
  return (
    <section className="features" id="features">

      {/* HEADER */}
      <div className="features-header">

        <span className="features-header-line"></span>

        <h2>BUILT FOR THE WAY YOU MOVE.</h2>

        <span className="features-header-line"></span>

      </div>


      {/* FEATURES */}
      <div className="features-grid">

        {features.map((feature, index) => (
          <article
            className="feature-card"
            key={feature.title}
          >

            {/* ICON */}
            <div className="feature-icon">

              <FontAwesomeIcon
                icon={feature.icon}
              />

              {/* 360° label */}
              {index === 1 && (
                <span className="spinner-label">
                  360°
                </span>
              )}

              {/* Small red detail for lock */}
              {index === 2 && (
                <span className="lock-dot"></span>
              )}

            </div>


            {/* TITLE */}
            <h3 className="feature-title">
              {feature.title}
            </h3>


            {/* DESCRIPTION */}
            <p className="feature-description">
              {feature.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Features;