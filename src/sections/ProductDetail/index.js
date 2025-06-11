import React, { useState } from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  // State management
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // Large is default
  const [quantity, setQuantity] = useState(1);

  // Product data
  const productImages = [
    "/assets/images/product-detail/sub-1.png",
    "/assets/images/product-detail/sub-2.png",
    "/assets/images/product-detail/sub-3.png",
  ];

  const colors = [
    { name: "Olive", class: "color-olive", bg: "#6b7c32" },
    { name: "Green", class: "color-green", bg: "#2d5a27" },
    { name: "Navy", class: "color-navy", bg: "#2c3e50" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Event handlers
  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  const handleColorSelect = (index) => {
    setSelectedColor(index);
  };

  const handleSizeSelect = (index) => {
    setSelectedSize(index);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const productData = {
      title: "ONE LIFE GRAPHIC SHIRT",
      price: 260,
      color: colors[selectedColor].name,
      size: sizes[selectedSize],
      quantity: quantity,
      image: productImages[selectedImage],
    };
    console.log("Add to cart:", productData);
    // Here you would typically dispatch to a cart context or call an API
  };

  return (
    <section className="product-detail-section">
      <div className="container">
        <div className="row">
          {/* Product Images */}
          <div className="col-lg-6">
            <div className="row">
              {/* Thumbnails */}
              <div className="col-3 d-flex flex-column gap-4">
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
              <div className="col-9">
                <img
                  src={productImages[selectedImage]}
                  alt="ONE LIFE GRAPHIC T-SHIRT"
                  className="product-main-image"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h1 className="product-title">ONE LIFE GRAPHIC SHIRT</h1>

              {/* Rating */}
              <div className="product-rating">
                <div className="product-rating-stars">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                  <i className="bi bi-star-half"></i>
                </div>
                <span className="product-rating-score">4.5/5</span>
              </div>

              {/* Price */}
              <div className="d-flex align-items-center price-container">
                <span className="price-current">$260</span>
                <span className="price-previous">$300</span>
                <span className="discount-badge">-40%</span>
              </div>

              {/* Description */}
              <p className="product-description">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
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
                <div className="d-flex flex-wrap">
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
              <div className="row align-items-center pe-5">
                <div className="col-4 quantity-selector">
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
                <div className="col-8">
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
