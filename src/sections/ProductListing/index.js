import React from "react";
import "./ProductListing.css";
import FilterPanel from "../FilterPanel";
import { useProductListing } from "../../hooks";

const ProductListing = ({ products, filters }) => {
  const {
    // State
    sortBy,
    showMobileFilters,
    isSortDropdownOpen,
    
    // Data
    sortOptions,
    paginationInfo,
    currentProducts,
    
    // Computed values
    paginationItems,
    
    // Utilities
    renderStars,
    
    // Handlers
    handleSortChange,
    handlePageChange,
    toggleMobileFilters,
    toggleSortDropdown,
    handleApplyFilters,
  } = useProductListing({ products, filters });

  return (
    <div className="category-product-listing">
      {/* Header */}
      <div className="listing-header">
        <h2 className="category-title">Casual</h2>
        <div className="listing-controls">
          <span className="showing-text">
            Showing {paginationInfo.startProduct}-{paginationInfo.endProduct} of {paginationInfo.totalProducts} Products
          </span>
          {/* Sort Dropdown */}
          <div className="sort-dropdown">
            <span className="sort-label">Sort by:</span>
            <div className="custom-dropdown">
              <button
                className="btn btn-outline-dark dropdown-toggle sort-btn d-flex align-items-center"
                type="button"
                onClick={toggleSortDropdown}
              >
                <span className="me-2">{sortBy}</span>
              </button>
              {isSortDropdownOpen && (
                <div className="custom-dropdown-menu">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className={`custom-dropdown-item ${sortBy === option ? 'active' : ''}`}
                      onClick={() => handleSortChange(option)}
                    >
                      {option}
                      {sortBy === option && (
                        <i className="bi bi-check-lg ms-2 text-success"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="responsive-filters" onClick={toggleMobileFilters}>
            <i className="bi bi-sliders2-vertical"></i>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="category-product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="category-product-card">
            <div className="category-product-image">
              <a href={"/product-detail"}>
                <img src={product.image} alt={product.name} />
              </a>
            </div>

            <div className="category-product-info">
              <a href={"/product-detail"} className="text-decoration-none text-black">
                <h5 className="category-product-name">{product.name}</h5>
              </a>
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
            <li className={`page-item ${paginationInfo.currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="btn btn-light prev-btn"
                onClick={() => handlePageChange(paginationInfo.currentPage - 1)}
                disabled={paginationInfo.currentPage === 1}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Previous
              </button>
            </li>

            {paginationItems.map((page, index) => (
              <li
                key={index}
                className={`page-item ${page === "..." ? "disabled" : ""} ${page === paginationInfo.currentPage ? "active" : ""
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
              className={`page-item ${paginationInfo.currentPage === paginationInfo.totalPages ? "disabled" : ""
                }`}
            >
              <button
                className="btn btn-light next-btn"
                onClick={() => handlePageChange(paginationInfo.currentPage + 1)}
                disabled={paginationInfo.currentPage === paginationInfo.totalPages}
              >
                Next
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <div className="mobile-filter-overlay">
          <div className="mobile-filter-header">
            <h3>Filters</h3>
            <button className="close-filters-btn" onClick={toggleMobileFilters}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="mobile-filter-content">
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
