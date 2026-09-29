import "./Collection.css";

function Collection() {
  return (
    <section className="collection" id="collections">

      {/* =========================
          COLLECTION INTRO
      ========================= */}
      <div className="collection-intro">

        <p className="collection-eyebrow">
          EASTSIDE. COLLECTION
        </p>

        <h2>MEET THE COLLECTION</h2>

        <div className="collection-line"></div>

        <p className="collection-subtitle">
          ONE DESIGN. THREE COLORS.
        </p>

      </div>


      {/* =========================
          PRODUCTS
      ========================= */}
      <div className="collection-grid">


        {/* =========================
            BLACK
        ========================= */}
        <article className="collection-card">

          <div className="collection-image">
            <img
              src="/images/black-luggage.png"
              alt="EASTSIDE black 20-inch carry-on"
            />

            <div className="collection-hover">
              EXPLORE
              <span>→</span>
            </div>
          </div>

          <div className="collection-info">

            <h3>BLACK</h3>

            <p>20" SIGNATURE CARRY-ON</p>

            <div className="color-dots">
              <span className="dot dot-black active"></span>
              <span className="dot dot-grey"></span>
              <span className="dot dot-pink"></span>
            </div>

          </div>

        </article>


        {/* =========================
            SPACE GREY
        ========================= */}
        <article className="collection-card">

          <div className="collection-image">
            <img
              src="/images/space-grey-luggage.png"
              alt="EASTSIDE space grey 20-inch carry-on"
            />

            <div className="collection-hover">
              EXPLORE
              <span>→</span>
            </div>
          </div>

          <div className="collection-info">

            <h3>SPACE GREY</h3>

            <p>20" SIGNATURE CARRY-ON</p>

            <div className="color-dots">
              <span className="dot dot-black"></span>
              <span className="dot dot-grey active"></span>
              <span className="dot dot-pink"></span>
            </div>

          </div>

        </article>


        {/* =========================
            PINK
        ========================= */}
        <article className="collection-card">

          <div className="collection-image">
            <img
              src="/images/pink-luggage.png"
              alt="EASTSIDE pink 20-inch carry-on"
            />

            <div className="collection-hover">
              EXPLORE
              <span>→</span>
            </div>
          </div>

          <div className="collection-info">

            <h3>PINK</h3>

            <p>20" SIGNATURE CARRY-ON</p>

            <div className="color-dots">
              <span className="dot dot-black"></span>
              <span className="dot dot-grey"></span>
              <span className="dot dot-pink active"></span>
            </div>

          </div>

        </article>

      </div>


      {/* =========================
          COLLECTION STATEMENT
      ========================= */}
      <div className="collection-statement">

        <h3>BUILT FOR THE WAY YOU MOVE.</h3>

        <p>
          ONE DESIGN. THREE WAYS TO TRAVEL.
        </p>

      </div>

    </section>
  );
}

export default Collection;