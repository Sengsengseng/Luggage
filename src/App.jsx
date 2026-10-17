import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductHero from "./components/ProductHero";
import BrandStatement from "./components/BrandStatement";
import ProductExterior from "./components/ProductExterior";
import ProductInterior from "./components/ProductInterior";
import ProductChoice from "./components/ProductChoice";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================
            HERO
        ========================= */}
        <Hero />


        {/* =========================
            SIGNATURE CARRY-ON
        ========================= */}
        <ProductHero />

        {/* =========================
            product exterior
        ========================= */}
        <ProductExterior />


        {/* =========================
            product interior
        ========================= */}
        <ProductInterior />

        {/* =========================
            product choice
        ========================= */}
        <ProductChoice />

      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <Footer />
    </>
  );
}

export default App;