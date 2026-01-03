export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title fade-in">Troy's Crypto learning library</h1>

        <div className="hero-description fade-in-delay">
          <div className="description-content">
            <p className="hero-subtitle">
              a collection of the best resources for learning Crypto from the
              Internet, hand-picked and curated by{" "}
              <a
                href="https://x.com/Troy_crypto_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Troy Yan
              </a>
              .<br />
              <br />
              all resources are:
              <br />
              - free to access
              <br />- friendly to non-technical people
            </p>
            <div className="accent-line"></div>
          </div>
        </div>

        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-accent"></div>
        </div>
      </div>
    </section>
  );
}
