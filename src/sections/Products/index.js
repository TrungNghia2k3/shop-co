import "./Products.css";

const Products = ({ title, products }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      let starClass = "bi bi-star text-muted";

      if (rating >= starValue) {
        // Full star
        starClass = "bi bi-star-fill text-warning";
      } else if (rating >= starValue - 0.5) {
        // Half star
        starClass = "bi bi-star-half text-warning";
      }

      return <i key={index} className={starClass}></i>;
    });
  };

  return (
    <section className="products-section">
      <div className="container d-flex flex-column align-items-center justify-content-center py-4">
        <h2 className="section-title">{title}</h2>
        <div className="row w-100 g-3 d-flex justify-content-center align-items-center">
          {products.map((product) => (
            <div className="col-md-6 col-lg-3 col-sm-4 product-card-item" key={product.id}>
              <div className="product-card py-3">
                <a href={"/product-detail"}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded-5"
                  />
                </a>
                <div className="mt-4">
                  <a className="text-decoration-none text-black" href={"/product-detail"}>
                    <h5 className="fs-6 fs-md-5">{product.name}</h5>
                  </a>

                  {/* Rating */}
                  <div className="rating-box d-flex align-items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="ms-2 text-muted small">
                      {product.rating}/5
                    </span>
                  </div>

                  <div className="price-box d-flex align-items-center flex-wrap">
                    <p className="mb-0 fs-5 fs-md-4 fw-semibold">
                      ${product.new_price}
                    </p>

                    {product.old_price && (
                      <p className="old-price text-muted mb-0 ms-2 ms-md-3 fs-6 fs-md-4">
                        <del>${product.old_price}</del>
                      </p>
                    )}

                    {product.discount && (
                      <p className="badge bg-danger text-white ms-2 ms-md-3 mb-0 small">
                        -{product.discount}%
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-4 text-center px-5">
          <button className="btn btn-white px-5 py-2 rounded-5 border border-light-subtle border-1 btn-view-all">
            View All
          </button>
        </div>
    </section>
  );
};

export default Products;
