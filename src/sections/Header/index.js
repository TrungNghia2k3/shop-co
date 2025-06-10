import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <header>
        <div className="w-100 bg-black text-white p-2 ">
          <div className="w-1440 d-flex justify-content-center align-items-center position-relative">
            <p className="m-0 fs-6">
              Sign up and get 20% off to your first order. Sign Up Now
            </p>
            <div
              className="position-absolute me-2"
              style={{ right: 70, cursor: "pointer" }}
            >
              <i className="bi bi-x-lg" onClick={() => setIsVisible(false)}></i>
            </div>
          </div>
        </div>

        <div className="w-1440 d-flex align-items-center justify-content-between px-6 py-4">
          {/* Logo */}
          <h2 className="logo">Shop.Co</h2>

          {/* Navigation */}
          <nav>
            <ul className="d-flex gap-3 list-unstyled ms-5 me-4 my-0 p-0">
              <li className="nav-item mx-1 text-nowrap">
                <a href="#shop" className="nav-link text-dark text-capitalize">
                  Shop <i className="bi bi-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item mx-1 text-nowrap">
                <a
                  href="#on-sale"
                  className="nav-link text-dark text-capitalize"
                >
                  On Sale
                </a>
              </li>
              <li className="nav-item mx-1 text-nowrap">
                <a
                  href="#new-arrivals"
                  className="nav-link text-dark text-capitalize"
                >
                  New Arrivals
                </a>
              </li>
              <li className="nav-item mx-1 text-nowrap">
                <a
                  href="#brands"
                  className="nav-link text-dark text-capitalize"
                >
                  Brands
                </a>
              </li>
            </ul>
          </nav>

          {/* Search bar */}
          <div className="d-flex align-items-center w-50 rounded-5 bg-light p-2 ms-3">
            <i className="bi bi-search px-2 text-secondary"></i>

            <input
              type="text"
              placeholder="Search for products..."
              className="form-control me-2 border-0 bg-transparent no-outline"
            />
          </div>

          {/* Cart and User account */}
          <div className="d-flex align-items-center ms-3 fs-4">
            <i className="bi bi-cart3 mx-2"></i>
            <i className="bi bi-person-circle mx-2"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
