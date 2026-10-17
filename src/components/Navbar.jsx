import "./Navbar.css";

const base = import.meta.env.BASE_URL;

function Navbar() {
  return (
    <header className="luxury-navbar">
      <div className="luxury-navbar-inner">

        {/* =========================
            EASTSIDE LOGO
        ========================= */}

        <a
          href="#"
          className="luxury-logo"
          aria-label="Eastside Home"
        >
         <img
  src={`${base}eastside-logo2.png`}
  alt="EASTSIDE"
  className="luxury-logo-image"
/>
        </a>


        {/* =========================
            NAVIGATION
        ========================= */}

        <nav className="luxury-nav">

          <a
            href="#"
            className="active"
          >
            HOME
          </a>

          <a href="#shop">
            SHOP
          </a>

          <a href="#collections">
            COLLECTIONS
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#journal">
            JOURNAL
          </a>

        </nav>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="luxury-actions">

          {/* Search */}

          <button
            className="luxury-icon"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24">
              <circle
                cx="11"
                cy="11"
                r="6.5"
              />

              <path d="M16 16L21 21" />
            </svg>
          </button>


          {/* Account */}

          <button
            className="luxury-icon"
            aria-label="Account"
          >
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="8"
                r="3.2"
              />

              <path d="M5.5 20c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5" />
            </svg>
          </button>


          {/* Divider */}

          <span className="luxury-divider"></span>


          {/* Add To Cart */}

          <button className="luxury-cart">
            <span>ADD TO CART</span>
            <span className="cart-arrow">→</span>
          </button>


          {/* Mobile menu */}

          <button
            className="luxury-menu"
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;