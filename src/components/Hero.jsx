import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            {/* =========================
                LEFT / CRAZY TRAVEL WORLD
            ========================= */}

            <div className="hero-left">

                {/* Main luggage */}
                <img
                    src="/luggage.png"
                    alt="EASTSIDE luggage"
                    className="hero-luggage"
                />

                {/* Running character */}
                <img
                    src="/images/suitcase-run.png"
                    alt=""
                    className="travel-character character-run"
                />

                {/* Dancing / shaking character */}
                <img
                    src="/images/suitcase-shake.png"
                    alt=""
                    className="travel-character character-shake"
                />

                {/* Pointing character */}
                <img
                    src="/images/suitcase-point.png"
                    alt=""
                    className="travel-character character-point"
                />

                {/* Celebrating character */}
                <img
                    src="/images/suitcase-pose.png"
                    alt=""
                    className="travel-character character-pose"
                />

                {/* Plane */}
                <div className="hero-plane">
                    ✈
                </div>

                {/* Flight path */}
                <div className="flight-path"></div>

                {/* Decorative dots */}
                <span className="travel-dot dot-blue"></span>
                <span className="travel-dot dot-purple"></span>
                <span className="travel-dot dot-pink"></span>
                <span className="travel-dot dot-orange"></span>

                {/* Stars */}
                <span className="travel-star star-one">✦</span>
                <span className="travel-star star-two">✦</span>
                <span className="travel-star star-three">✧</span>

            </div>


            {/* =========================
                RIGHT / BRAND
            ========================= */}

            <div className="hero-right">

                <div className="hero-meta">
                    <span>EST. 2026</span>
                    <span>DESIGNED TO MOVE</span>
                </div>

                <img
                    src="/eastside-logo.png"
                    alt="EASTSIDE mascot"
                    className="hero-mascot"
                />

                <h1>
                    EASTSIDE<span>.</span>
                </h1>

                <p className="hero-tagline">
                    TRAVEL YOUR WAY
                </p>

                <div className="hero-divider"></div>

                <p className="hero-description">
                    LUGGAGE FOR A BOLDER TOMORROW
                </p>

                <a href="#customise" className="hero-button">
                    SHOP ACCESSORIES
                    <span>→</span>
                </a>

                <p className="hero-next">
                    NEXT STOP <span>ANYWHERE</span>
                </p>

            </div>

        </section>
    );
}

export default Hero;