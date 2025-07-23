import React from "react";
import "./Header.css";
import { useHeader } from "../../hooks";

const Header = () => {
  const {
    // State
    isMobileMenuOpen,
    
    // Data
    navigationItems,
    bannerConfig,
    logoConfig,
    searchConfig,
    
    // Actions
    toggleMobileMenu,
    closeMobileMenu,
    dismissBanner,
  } = useHeader();

  return (
    <>
      <header>
        {bannerConfig.isVisible && (
          <div className="bg-black text-white p-2 alert-banner">
            <div className="container d-flex justify-content-center align-items-center position-relative">
              <p className="m-0 fs-6">
                {bannerConfig.message} <span className="text-decoration-underline">{bannerConfig.ctaText}</span>
              </p>
              <div
                className="position-absolute"
                style={{ right: "0", cursor: "pointer" }}
              >
                <i
                  className="bi bi-x-lg"
                  onClick={dismissBanner}
                ></i>
              </div>
            </div>
          </div>
        )}

        <div className="container d-flex align-items-center justify-content-between border-bottom header-container">

          {/* Hamburger menu icon */}
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            <i className="bi bi-list"></i>
          </div>

          {/* Logo */}
          <a href={logoConfig.href} className="text-dark text-decoration-none">
            <h2 className="logo">{logoConfig.text}</h2>
          </a>

          {/* Navigation */}
          <nav className="desktop-nav">
            <ul className="d-flex gap-3 list-unstyled ms-5 me-4 my-0 p-0">
              {navigationItems.map((item) => (
                <li key={item.href} className="nav-item mx-1 text-nowrap">
                  <a href={item.href} className="nav-link text-dark text-capitalize">
                    {item.label} {item.hasDropdown && <i className="bi bi-chevron-down"></i>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search bar */}
          <div className="d-flex align-items-center w-50 rounded-5 bg-light p-2 ms-3 search-bar">
            <i className="bi bi-search px-2 text-secondary"></i>

            <input
              type="text"
              placeholder={searchConfig.placeholder}
              className="form-control me-2 border-0 bg-transparent no-outline"
            />
          </div>

          {/* Cart and User account */}
          <div className="d-flex align-items-center ms-3 fs-4">

            <i className="bi bi-search mx-2 search-icon"></i>

            <a href="/shopping-cart" className="text-dark text-decoration-none">
              <i className="bi bi-cart3 mx-2"></i>
            </a>

            <i className="bi bi-person-circle ms-2"></i>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-header">
          <div className="close-icon" onClick={closeMobileMenu}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>

        <ul className="list-unstyled">
          {navigationItems.map((item) => (
            <li key={item.href} className="nav-item mx-1 text-nowrap">
              <a href={item.href} className="nav-link text-dark text-capitalize">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
