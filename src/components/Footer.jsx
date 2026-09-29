import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [message, setMessage] = useState("Nice to meet you.");

  const resetMessage = () => {
    setMessage("Nice to meet you.");
  };

  return (
    <footer className="crazy-footer">

      {/* =========================
          SKY
      ========================= */}

      <div className="footer-sky">

        <div className="footer-sun"></div>

        <div className="footer-stars">
          <span>✦</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>

        {/* CLOUDS */}
        <div className="footer-cloud footer-cloud-1"></div>
        <div className="footer-cloud footer-cloud-2"></div>
        <div className="footer-cloud footer-cloud-3"></div>

        {/* PLANE */}
        <div className="footer-plane">
          ✈
        </div>

        {/* PLANE TRAIL */}
        <div className="plane-trail"></div>

      </div>


      {/* =========================
          MOUNTAINS
      ========================= */}

      <div className="footer-mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="crazy-footer-content">

        <p className="footer-eyebrow">
          EASTSIDE
        </p>


        {/* LOGO */}

        <div
          className="footer-logo-wrap"
          onMouseEnter={() =>
            setMessage("Ready for somewhere new?")
          }
          onMouseLeave={resetMessage}
        >
          <div className="footer-logo-glow"></div>

          <img
            src="/eastside-logo.png"
            alt="Eastside"
            className="footer-logo"
          />
        </div>


        {/* MESSAGE */}

        <p className="footer-message">
          {message}
        </p>


        <p className="footer-tagline">
          LUGGAGE FOR A BOLDER TOMORROW
        </p>


        {/* NAV */}

        <nav className="crazy-footer-nav">

          <a
            href="#collections"
            onMouseEnter={() => setMessage("Where to next?")}
            onMouseLeave={resetMessage}
          >
            SHOP
          </a>

          <a
            href="#about"
            onMouseEnter={() => setMessage("Come with us.")}
            onMouseLeave={resetMessage}
          >
            ABOUT
          </a>

          <a
            href="#contact"
            onMouseEnter={() => setMessage("Say hello.")}
            onMouseLeave={resetMessage}
          >
            CONTACT
          </a>

          <a
            href="#faq"
            onMouseEnter={() => setMessage("Need a hand?")}
            onMouseLeave={resetMessage}
          >
            FAQ
          </a>

        </nav>


        {/* SOCIAL */}

        <div className="crazy-social">

          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24">
              <path d="M14 4v10.2a4.8 4.8 0 1 1-3.8-4.7" />
              <path d="M14 4c.8 2.8 2.4 4.4 5 4.8" />
            </svg>
          </a>

        </div>

      </div>


      {/* =========================
          ROAD
      ========================= */}

      <div className="footer-road">

        <div className="road-line"></div>

        <div className="footer-car">
          🚗
        </div>

      </div>


      {/* =========================
          OCEAN
      ========================= */}

      <div className="footer-ocean">

        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>

        <div className="footer-boat">
          ⛵
        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="crazy-footer-bottom">

        <span>
          © 2026 EASTSIDE
        </span>

        <span>
          ALL RIGHTS RESERVED
        </span>

      </div>

    </footer>
  );
}

export default Footer;