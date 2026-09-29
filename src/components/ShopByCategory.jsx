import "./ShopByCategory.css";

function ShopByCategory() {
  const categories = [
    {
      number: "01",
      title: "TRAVEL",
      description: "ESSENTIALS FOR THE JOURNEY",
    },
    {
      number: "02",
      title: "ORGANIZE",
      description: "KEEP EVERYTHING IN PLACE",
    },
    {
      number: "03",
      title: "TECH",
      description: "BUILT FOR LIFE ON THE MOVE",
    },
    {
      number: "04",
      title: "CARRY",
      description: "EVERYDAY ESSENTIALS",
    },
  ];

  return (
    <section className="category-section" id="collections">

      <div className="category-heading">
        <p className="category-eyebrow">
          EASTSIDE. COLLECTION
        </p>

        <h2>SHOP BY CATEGORY</h2>

        <p className="category-subtitle">
          ACCESSORIES FOR EVERY MOVE.
        </p>
      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <a
            href="#shop"
            className="category-card"
            key={category.number}
          >
            <span className="category-number">
              {category.number}
            </span>

            <div className="category-content">
              <h3>{category.title}</h3>

              <p>{category.description}</p>
            </div>

            <span className="category-arrow">
              →
            </span>
          </a>
        ))}

      </div>

    </section>
  );
}

export default ShopByCategory;