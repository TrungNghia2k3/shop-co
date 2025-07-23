import React from "react";
import "./Cart.css";
import { useCart } from "../../hooks";

const Cart = () => {
  const {
    // State
    cartItems,
    promoCode,
    setPromoCode,
    
    // Computed values
    cartSummary,
    
    // Actions
    updateQuantity,
    removeItem,
    applyPromoCode,
  } = useCart();

  return (
    <section className="cart-section">
      <div className="container cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="container-fluid p-0">
          <div className="row">
            {/* Cart Items Section */}
            <div className="col-lg-7 col-md-12 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item rounded-5">
                  {/* Cart Item Content */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="item-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>

                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="item-name mb-1">{item.name}</h5>
                          <div>
                            <p className="item-details mb-0">
                              Size: <span className="text-muted">{item.size}</span>
                            </p>
                            <p className="item-details mb-0">
                              Color: <span className="text-muted">{item.color}</span>
                            </p>
                          </div>
                        </div>

                        <button
                          className="btn btn-link text-danger p-0 remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="item-price">${item.price}</h5>

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
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="col-lg-5 col-md-12">
              <div className=" rounded-5 order-summary">
                <h4 className="mb-4 fs-5">Order Summary</h4>

                <div className="summary-row">
                  <span className="fs-6">Subtotal</span>
                  <span className="fw-semibold fs-6">${cartSummary.subtotal}</span>
                </div>

                <div className="summary-row">
                  <span className="fs-6">Discount (-20%)</span>
                  <span className="text-danger fs-6">-${cartSummary.discount}</span>
                </div>

                <div className="summary-row">
                  <span className="fs-6">Delivery Fee</span>
                  <span className="fs-6">${cartSummary.deliveryFee}</span>
                </div>

                <hr className="my-3" />

                <div className="summary-row total-row">
                  <span className="fs-5 fw-semibold">Total</span>
                  <span className="fs-5 fw-bold">${cartSummary.total}</span>
                </div>

                <div className="promo-section mt-4 mb-4">
                  <div className="input-group d-flex align-items-center bg-light rounded-5 px-4 py-1">
                    <i className="bi bi-tag fs-5 text-secondary"></i>
                    <input
                      type="text"
                      className="form-control border-0 bg-light py-0 fs-6"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-dark rounded-5 px-4 py-2 fs-6"
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
