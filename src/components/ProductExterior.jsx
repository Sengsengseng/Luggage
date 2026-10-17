import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDharmachakra,
  faLock,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

import "./ProductExterior.css";

const base = import.meta.env.BASE_URL;

const details = [
  {
    title: "REMOVABLE WHEELS",
    description: (
      <>
        Easy to detach,
        <br />
        clean, or replace.
      </>
    ),
    icon: faDharmachakra,
  },
  {
    title: "TSA LOCK",
    description: (
      <>
        Secure travel with
        <br />
        peace of mind.
      </>
    ),
    icon: faLock,
  },
  {
    title: "CABIN READY",
    description: (
      <>
        Sized for smoother
        <br />
        journeys.
      </>
    ),
    icon: faPlane,
  },
];

function ProductExterior() {
  return (
    <section className="product-exterior" id="exterior-details">

      {/* LUGGAGE */}
      <div className="product-exterior-visual">
        <img
          src={`${base}images/02-exterior-details.png`}
          alt="EASTSIDE Signature Carry-On exterior"
          className="product-exterior-image"
        />
      </div>

      {/* CONTENT */}
      <div className="product-exterior-content">

        <div className="product-exterior-heading">

          <div className="product-exterior-eyebrow">
            <span></span>
            EXTERIOR
          </div>

          <h2>
            DESIGNED FROM
            <br />
            EVERY ANGLE.
          </h2>

        </div>

        {/* FEATURES */}
        <div className="product-exterior-details">

          {details.map((detail, index) => (
            <article
              className="product-exterior-detail"
              key={detail.title}
            >

              <div className="product-exterior-icon">

                <FontAwesomeIcon icon={detail.icon} />

                {index === 1 && (
                  <span className="tsa-red-diamond"></span>
                )}

              </div>

              <h3>{detail.title}</h3>

              <p>{detail.description}</p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductExterior;