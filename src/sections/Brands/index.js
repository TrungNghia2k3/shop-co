import "./Brands.css"
const Brands = () => {
  return (
    <div className="brands-section bg-black">
      <div className="container">
        <div className="row brands-row">
          <div className="col-4 col-md-6 col-lg-2 brand-item">
            <img
              src="../assets/images/brands/versace.png"
              alt="Versace"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-md-6 col-lg-2 brand-item">
            <img
              src="../assets/images/brands/zara.png"
              alt="Zara"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-md-6 col-lg-2 brand-item">
            <img
              src="../assets/images/brands/gucci.png"
              alt="Gucci"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-md-6 col-lg-2 brand-item">
            <img
              src="../assets/images/brands/prada.png"
              alt="Prada"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-md-6 col-lg-2 brand-item">
            <img
              src="../assets/images/brands/calvin-klein.png"
              alt="Calvin Klein"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
