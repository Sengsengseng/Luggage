import "./ProductChoice.css";

const base = import.meta.env.BASE_URL;

function ProductChoice() {
  return (
    <section className="product-choice" id="product-choice">

      <img
        src={`${base}images/04-choose-your-eastside.png`}
        alt="Choose your Eastside"
        className="product-choice-image"
      />

      <div className="product-choice-content">

        <p className="product-choice-eyebrow">
          NEXT: CHOOSE YOUR EASTSIDE
        </p>

        <h2 className="product-choice-title">
          CHOOSE YOUR EASTSIDE.
        </h2>

        <p className="product-choice-description">
          Explore colours and make it yours on the next page.
        </p>

        <a
          href="#collections"
          className="product-choice-button"
        >
          CHOOSE YOUR COLOUR
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default ProductChoice;