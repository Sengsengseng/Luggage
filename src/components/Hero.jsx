
import { useEffect, useState } from "react";
import "./Hero.css";

const base = import.meta.env.BASE_URL;

const slides = [
  {
    image: "images/hero-lifestyle.png",
    alt: "Eastside luggage on a luxury travel escape",
    title: (
      <>
        BUILT FOR
        <br />
        <span>YOUR JOURNEY.</span>
      </>
    ),
  },
  {
    image: "images/suitcase-run.png",
    alt: "Eastside luggage ready for the next adventure",
    title: (
      <>
        READY.
        <br />
        <span>SET. GO.</span>
      </>
    ),
  },
  {
    image: "images/suitcase-pose.png",
    alt: "Eastside luggage with distinctive travel style",
    title: (
      <>
        MAKE IT
        <br />
        <span>YOUR OWN.</span>
      </>
    ),
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="luxury-hero"
      aria-label="Eastside featured collection"
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide ${
              index === activeSlide ? "is-active" : ""
            }`}
            key={slide.image}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={`${base}${slide.image}`}
              alt={slide.alt}
              className="hero-slide-image"
              fetchPriority={index === 0 ? "high" : "auto"}
            />

            <div className="hero-slide-shade" />
          </div>
        ))}
      </div>

      <div className="hero-content" key={activeSlide}>
        <h1 className="hero-title">{slides[activeSlide].title}</h1>

        <div className="hero-actions">
          <a href="#collections" className="hero-primary-button">
            SHOP COLLECTION
            <span aria-hidden="true">→</span>
          </a>

          <a href="#about" className="hero-secondary-button">
            MEET EASTY
          </a>
        </div>
      </div>

      <div className="hero-controls">
        <button
          type="button"
          className="hero-pause"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          title={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? "▶" : "Ⅱ"}
        </button>

        <div className="hero-dots" aria-label="Choose slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              className={`hero-dot ${
                index === activeSlide ? "is-active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="hero-arrow"
          onClick={() => goToSlide(activeSlide - 1)}
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          type="button"
          className="hero-arrow"
          onClick={() => goToSlide(activeSlide + 1)}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Hero;
