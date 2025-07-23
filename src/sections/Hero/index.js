import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center ">
            <h1 className="hero-main-text">
              Find Clothes That Matches Your Style
            </h1>

            <p className="text-secondary my-3 hero-description">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="btn btn-lg rounded-5 hero-button">Shop Now</button>

            <div className="number-list">
              <ul className="list-unstyled text-secondary">
                <li>
                  <span>200+</span> <br />
                  International Brands
                </li>
                <li>
                  <span>2,000+</span> <br />High-Quality Products
                </li>
                <li>
                  <span>30,000+</span> <br />Happy Customers
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-end">
            <div className="hero-image">
              <img
                src="./assets/images/hero.png"
                alt="Fashion Model"
                className="w-100 h-100 object-cover"
              />

              <i className="bi bi-star-fill vector-hero-image-1"></i>

              <i className="bi bi-star-fill vector-hero-image-2"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
