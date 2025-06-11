import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/assets/images/products/product-1.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/assets/images/products/product-2.png",
    },
    {
      id: 3,
      name: "T-Shirt with Tape Details",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/assets/images/products/product-3.png",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal === 0 ? 0 : subtotal - discount + deliveryFee;

  const applyPromoCode = () => {
    // Handle promo code logic here
    console.log("Applying promo code:", promoCode);
  };

  return (
    <section className="cart-section">
      <div className="container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="container-fluid p-0">
          <div className="row">
            {/* Cart Items Section */}
            <div className="col-lg-7 col-md-12 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item rounded-5">
                  <div className="d-flex align-items-center">
                    <div className="item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h5 className="item-name mb-1">{item.name}</h5>
                          <p className="item-details mb-0">
                            Size:{" "}
                            <span className="text-muted">{item.size}</span>
                          </p>
                          <p className="item-details mb-2">
                            Color:{" "}
                            <span className="text-muted">{item.color}</span>
                          </p>
                          <h5 className="item-price">${item.price}</h5>
                        </div>

                        <div className="d-flex flex-column align-items-end">
                          <button
                            className="btn btn-link text-danger p-0 remove-btn"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>

                          <div className="quantity-controls">
                            <div className="btn-group" role="group">
                              <button
                                className="btn"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <i className="bi bi-dash fs-3"></i>
                              </button>
                              <input value={item.quantity} readOnly />
                              <button
                                className="btn"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <i className="bi bi-plus fs-3"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="col-lg-5 col-md-12">
              <div className=" rounded-5 order-summary">
                <h4 className="mb-4">Order Summary</h4>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span className="fw-semibold">${subtotal}</span>
                </div>

                <div className="summary-row">
                  <span>Discount (-20%)</span>
                  <span className="text-danger">-${discount}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee}</span>
                </div>

                <hr className="my-3" />

                <div className="summary-row total-row">
                  <span className="h5">Total</span>
                  <span className="h4 fw-semibold">${total}</span>
                </div>

                <div className="promo-section mt-4 mb-4">
                  <div className="input-group d-flex align-items-center bg-light rounded-5 px-4 py-1">
                    <i className="bi bi-tag fs-4 text-secondary"></i>
                    <input
                      type="text"
                      className="form-control border-0 bg-light py-0"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-dark rounded-5 px-4 py-2"
                    onClick={applyPromoCode}
                  >
                    Apply
                  </button>
                </div>

                <button className="btn btn-dark btn-lg w-100 checkout-btn">
                  Go to Checkout <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
