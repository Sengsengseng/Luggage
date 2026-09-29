import EastsideLogo from "./EastsideLogo";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="eastside-brand">

        {/*<EastsideLogo className="navbar-logo-icon" />  */}

        <img
          src="/eastside-logo.png"
          alt="EASTSIDE"
          className="navbar-logo-icon"
        />

        <div className="brand-text">
          <span>EASTSIDE.</span>
          <small>MOVE DIFFERENT</small>
        </div>

      </a>


      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#shop">Shop</a>
        <a href="#collections">Collections</a>
        <a href="#about">About</a>
      </div>


      <div className="navbar-actions">

        <button className="nav-icon" aria-label="Search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </button>

        <button className="nav-icon" aria-label="Account">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6" />
          </svg>
        </button>

        <button className="cart-button">
          Add to Cart
        </button>

      </div>

    </nav>
  );
}

export default Navbar;