import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import Collection from "./components/Collection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Collection />

        <BrandStatement />
      </main>

      <Footer />
    </>
  );
}

export default App;