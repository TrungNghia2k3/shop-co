import "./Products.css";

const Products = ({ title, products }) => {
  // Hàm xử lý render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      let starClass = "bi bi-star text-muted";

      if (rating >= starValue) {
        // Sao đầy
        starClass = "bi bi-star-fill text-warning";
      } else if (rating >= starValue - 0.5) {
        // Sao nửa
        starClass = "bi bi-star-half text-warning";
      }

      return <i key={index} className={starClass}></i>;
    });
  };

  return (
    <section className="products-section">
      <div className="w-1440 products-container d-flex flex-column align-items-center justify-content-center">
        <h2 className="section-title">{title}</h2>
        <div className="row w-100 pe-3">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 rounded-5"
                />
                <div className="mt-3">
                  <h5>{product.name}</h5>

                  {/* Rating */}
                  <div className="rating-box d-flex align-items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="ms-2 text-muted small">
                      {product.rating}/5
                    </span>
                  </div>

                  <div className="price-box d-flex align-items-center">
                    <p className="mb-0 fs-4 fw-semibold">
                      ${product.new_price}
                    </p>

                    {product.old_price && (
                      <p className="old-price text-muted mb-0 ms-3 fs-4">
                        <del>${product.old_price}</del>
                      </p>
                    )}

                    {product.discount && (
                      <p className="badge bg-danger text-white ms-3 mb-0">
                        -{product.discount}%
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-white mt-4 px-5 py-2 rounded-5 border border-light-subtle border-1">
          View All
        </button>
      </div>
    </section>
  );
};

export default Products;
