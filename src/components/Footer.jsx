import "./Footer.css";

const base = import.meta.env.BASE_URL;

function Footer() {
  return (
    <footer className="luxury-footer">

      {/* =========================================
          TOP RED RACING LINE
      ========================================= */}
      <div className="footer-racing-line"></div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="#" className="footer-logo">
            <img
              src={`${base}eastside-logo2.png`}
              alt="EASTSIDE"
            />
          </a>

          <p className="footer-description">
            Travel, but make it iconic.
          </p>

          <div className="footer-socials">

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
                  className="social-dot"
                />
              </svg>
            </a>

            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24">
                <path d="M14 4v10.2a4.8 4.8 0 1 1-3.8-4.7" />
                <path d="M14 4c.8 2.8 2.4 4.4 5 4.8" />
              </svg>
            </a>

            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="3"
                />
                <path d="M10 9l5 3-5 3z" />
              </svg>
            </a>

          </div>
        </div>


        {/* NEWSLETTER */}
        <div className="footer-newsletter">

          <p className="footer-column-title">
            JOIN OUR JOURNEY.
          </p>

          <form className="footer-form">

            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              →
            </button>

          </form>

          <p className="footer-form-note">
            New drops, journeys and Eastside updates.
          </p>

        </div>


        {/* SHOP */}
        <div className="footer-column">

          <h3>SHOP</h3>

          <a href="#collections">
            ALL PRODUCTS
          </a>

          <a href="#customise">
            ACCESSORIES
          </a>

        </div>


        {/* ABOUT */}
        <div className="footer-column">

          <h3>ABOUT</h3>

          <a href="#about">
            OUR STORY
          </a>

          <a href="#journal">
            JOURNAL
          </a>

        </div>


        {/* HELP */}
        <div className="footer-column">

          <h3>HELP</h3>

          <a href="#faq">
            FAQ
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </div>

      </div>


      {/* =========================================
          BOTTOM
      ========================================= */}
      <div className="footer-bottom">

        <span>
          EASTSIDE / 2026
        </span>

        <span>
          DESIGNED TO MOVE
        </span>

        <span>
          ALL RIGHTS RESERVED
        </span>

      </div>

    </footer>
  );
}

export default Footer;