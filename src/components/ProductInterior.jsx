import "./ProductInterior.css";

const base = import.meta.env.BASE_URL;

function ProductInterior() {
  return (
    <section className="product-interior" id="interior-details">

      <img
        src={`${base}images/03-interior-details.png`}
        alt="EASTSIDE Signature Carry-On interior"
        className="product-interior-image"
      />

      <div className="product-interior-overlay"></div>

      <div className="product-interior-content">

        <div className="product-interior-eyebrow">
          INTERIOR
        </div>

        <h2>
          EVERYTHING
          <br />
          HAS ITS
          <br />
          PLACE.
        </h2>


        <div className="product-interior-signature">
          PRACTICAL LUXURY.
          <br />
          INSIDE AND OUT.
        </div>

      </div>

    </section>
  );
}

export default ProductInterior;