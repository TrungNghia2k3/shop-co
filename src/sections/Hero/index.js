import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="w-1440 hero-container">
        <div className="row">
          <div className="col-5">
            <h1>
              Find Clothes That Matches Your Style
            </h1>

            <p className="text-secondary my-4">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="btn btn-dark btn-lg rounded-5 px-5 py-3 mb-5">Shop Now</button>

            <div className="number-list">
              <ul className="list-unstyled d-flex gap-5 text-secondary">
                <li>
                  <span className="text-black fs-1 fw-semibold">200+</span> <br />International Brands
                </li>
                <li>
                  <span className="text-black fs-1 fw-semibold">2,000+</span> <br />High-Quality Products
                </li>
                <li>
                  <span className="text-black fs-1 fw-semibold">30,000+</span> <br />Happy Customers
                </li>
              </ul>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
