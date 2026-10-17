import "./ProductHero.css";

const base = import.meta.env.BASE_URL;

function ProductHero() {
  return (
    <section
      className="product-hero"
      id="signature-carry-on"
    >

      {/* =========================
          TOP RIGHT MESSAGE
      ========================= */}

      <div className="product-hero-destination">
        <span className="product-hero-destination-line"></span>

        <p>
          BRIGHTER
          <br />
          DESTINATIONS
        </p>
      </div>


      {/* =========================
          LEFT CONTENT
      ========================= */}

      <div className="product-hero-content">

        <p className="product-hero-eyebrow">
          EASTSIDE / PRODUCT STORY
        </p>

        <h2 className="product-hero-title">
          <span>MEET THE</span>
          <span>SIGNATURE</span>
          <span>CARRY-ON</span>
        </h2>


        <a
          href="#exterior-details"
          className="product-hero-button"
        >
          SEE THE DETAILS
          <span>→</span>
        </a>

      </div>


      {/* =========================
          LUGGAGE
      ========================= */}

      <div className="product-hero-product">

        <img
          src={`${base}images/01-signature-hero.png`}
          alt="EASTSIDE Signature Carry-On"
          className="product-hero-image"
        />

        <div className="product-hero-signature">
          Built for
          <br />
          your journey.
        </div>

      </div>

    </section>
  );
}

export default ProductHero;