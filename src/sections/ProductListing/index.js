import React, { useState } from "react";
import "./ProductListing.css";

const ProductListing = ({ products }) => {
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);

  const sortOptions = [
    "Most Popular",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }

    return stars;
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    // Add sorting logic here
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add pagination logic here
  };

  const totalPages = 10;
  const totalProducts = 100;
  const productsPerPage = 9;
  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = Math.min(currentPage * productsPerPage, totalProducts);

  return (
    <div className="category-product-listing">
      {/* Header */}
      <div className="listing-header">
        <h2 className="category-title">Casual</h2>
        <div className="listing-controls">
          <span className="showing-text">
            Showing {startProduct}-{endProduct} of {totalProducts} Products
          </span>
          <div className="sort-dropdown">
            <span className="sort-label">Sort by:</span>
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle sort-btn"
                type="button"
                data-bs-toggle="dropdown"
              >
                {sortBy}
              </button>
              <ul className="dropdown-menu">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortChange(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="category-product-grid">
        {products.map((product) => (
          <div key={product.id} className="category-product-card">
            <div className="category-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="category-product-info">
              <h5 className="category-product-name">{product.name}</h5>

              <div className="category-product-rating">
                <div className="category-product-stars">
                  {renderStars(product.rating)}
                </div>
                <span className="category-product-rating-text">
                  {product.rating}/5
                </span>
              </div>

              <div className="category-product-price">
                <span className="category-product-current-price">
                  ${product.new_price}
                </span>
                {product.old_price && (
                  <>
                    <span className="category-product-original-price">
                      ${product.old_price}
                    </span>
                    <span className="category-product-discount-percent">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-wrapper">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="btn btn-light prev-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Previous
              </button>
            </li>

            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <li
                key={index}
                className={`page-item ${page === "..." ? "disabled" : ""} ${
                  page === currentPage ? "active" : ""
                }`}
              >
                {page === "..." ? (
                  <span className="btn btn-light">...</span>
                ) : (
                  <button
                    className="btn btn-light"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="btn btn-light next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductListing;
