import React from "react";
import "./ProductDetail.css";
import { useProductDetail } from "../../hooks";

const ProductDetail = () => {
  const {
    // State
    selectedImage,
    selectedColor,
    selectedSize,
    quantity,
    
    // Data
    productImages,
    colors,
    sizes,
    productInfo,
    
    // Computed values
    selectedImageSrc,
    
    // Handlers
    handleImageChange,
    handleColorSelect,
    handleSizeSelect,
    increaseQuantity,
    decreaseQuantity,
    handleQuantityChange,
    handleAddToCart,
  } = useProductDetail();

  return (
    <section className="product-detail-section">
      <div className="container product-detail-container">
        <div className="row">
          {/* Product Images */}
          <div className="col-lg-6">
            <div className="row product-images-row">
              {/* Thumbnails */}
              <div className="col-lg-3 product-thumbnails">
                {productImages.map((image, index) => (
                  <div className="product-thumbnail" key={index}>
                    <img
                      src={image}
                      alt={`Product thumbnail ${index + 1}`}
                      onClick={() => handleImageChange(index)}
                      style={{
                        border:
                          selectedImage === index
                            ? "2px solid #ccc"
                            : "2px solid transparent",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="col-lg-9">
                <img
                  src={selectedImageSrc}
                  alt={productInfo.title}
                  className="product-main-image"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h1 className="product-title">{productInfo.title}</h1>

              {/* Rating */}
              <div className="product-rating">
                <div className="product-rating-stars">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                  <i className="bi bi-star-half"></i>
                </div>
                <span className="product-rating-score">{productInfo.rating}/5</span>
              </div>

              {/* Price */}
              <div className="d-flex align-items-center price-container">
                <span className="price-current">${productInfo.price}</span>
                <span className="price-previous">${productInfo.originalPrice}</span>
                <span className="discount-badge">-{productInfo.discount}%</span>
              </div>

              {/* Description */}
              <p className="product-description">
                {productInfo.description}
              </p>

              {/* Color Selection */}
              <div className="mb-3">
                <div className="color-selection-label">Select Colors</div>
                <div className="d-flex">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => handleColorSelect(index)}
                      className="color-option"
                      style={{
                        backgroundColor: color.bg,
                      }}
                    >
                      {selectedColor === index && (
                        <span className="check-icon">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-4">
                <div className="size-selection-label">Choose Size</div>
                <div className="d-flex flex-wrap size-options">
                  {sizes.map((size, index) => (
                    <div
                      key={index}
                      onClick={() => handleSizeSelect(index)}
                      className="size-option"
                      style={{
                        backgroundColor:
                          selectedSize === index ? "#000" : "#f8f9fa",
                        color: selectedSize === index ? "#fff" : "#666",
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="row align-items-center g-2">
                <div className="col-4 col-sm-4 col-md-3 col-lg-4">
                  <div className="quantity-selector">
                    <div className="d-flex align-items-center">
                      <button onClick={decreaseQuantity} className="decrease-btn">
                        <i className="bi bi-dash fs-3"></i>
                      </button>
                      <input
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        className="quantity-input"
                      />
                      <button onClick={increaseQuantity} className="increase-btn">
                        <i className="bi bi-plus fs-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-8 col-sm-8 col-md-9 col-lg-8">
                  <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
