import { useState, useEffect } from "react";

const useHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navigationItems = [
    { href: "#shop", label: "Shop", hasDropdown: true },
    { href: "/category", label: "Category", hasDropdown: false },
    { href: "#new-arrivals", label: "New Arrivals", hasDropdown: false },
    { href: "#brands", label: "Brands", hasDropdown: false },
  ];

  // Header actions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const dismissBanner = () => {
    setIsVisible(false);
  };

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Banner configuration
  const bannerConfig = {
    message: "Sign up and get 20% off to your first order.",
    ctaText: "Sign Up Now",
    isVisible,
  };

  // Logo configuration
  const logoConfig = {
    text: "Shop.Co",
    href: "/",
  };

  // Search configuration
  const searchConfig = {
    placeholder: "Search for products...",
  };

  return {
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
  };
};

export default useHeader;
