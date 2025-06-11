import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-light text-secondary py-5">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 mb-4  ">
            <a href="/" className="text-dark text-decoration-none">
              <h2 className="logo text-dark">SHOP.CO</h2>
            </a>
            <p className="brand-description">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="social-icons mt-3">
              <a href="/" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Works
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-lg-2 col-md-6 mb-4 ">
            <h5 className="footer-title">HELP</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Customer Support
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Delivery Details
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Column */}
          <div className="col-lg-2 col-md-6 mb-4 ">
            <h5 className="footer-title">FAQ</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Account
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Manage Deliveries
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Orders
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources Column --> */}
          <div className="col-lg-2 col-md-6 mb-4 ">
            <h5 className="footer-title">RESOURCES</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Free eBooks
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Development Tutorial
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  How to - Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright mb-0">
                Shop.co © 2000-2025, All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="payment-icons">
                <div className="payment-icon">
                  <img src="../assets/credits/visa.png" alt="Visa" />
                </div>
                <div className="payment-icon">
                  <img
                    src="../assets/credits/mastercard.png"
                    alt="Mastercard"
                  />
                </div>
                <div className="payment-icon">
                  <img src="../assets/credits/paypal.png" alt="PayPal" />
                </div>
                <div className="payment-icon">
                  <img src="../assets/credits/apple-pay.png" alt="Apple Pay" />
                </div>
                <div className="payment-icon">
                  <img
                    src="../assets/credits/google-pay.png"
                    alt="Google Pay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
