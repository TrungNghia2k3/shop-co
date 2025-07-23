import { useState, useEffect, useCallback } from "react";

export const useProductListing = ({products = [], filters = null}) => {
  // State
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  // Constants
  const productsPerPage = 9;
  
  // Computed values
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = Math.min(currentPage * productsPerPage, filteredProducts.length);
  
  // Get current page products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  
  // Pagination info object
  const paginationInfo = {
    currentPage,
    totalPages,
    startProduct,
    endProduct,
    totalProducts: filteredProducts.length
  };
  
  // Generate pagination items for mobile
  const generatePaginationItems = () => {
    const items = [];
    
    // Always show first page
    if (currentPage > 2) {
      items.push(1);
      if (currentPage > 3) {
        items.push("...");
      }
    }
    
    // Show current page and neighbors
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      items.push(i);
    }
    
    // Always show last page
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        items.push("...");
      }
      items.push(totalPages);
    }
    
    return items;
  };
  
  const paginationItems = generatePaginationItems();
  
  // Sort options
  const sortOptions = [
    "Most Popular",
    "Price: Low to High", 
    "Price: High to Low",
    "Newest",
    "Customer Rating"
  ];
  
  // Utility function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
    }
    
    return stars;
  };
  
  // Actions
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setIsSortDropdownOpen(false); // Close dropdown after selection
    
    // Add sorting logic here based on newSortBy
    let sorted = [...filteredProducts];
    
    switch (newSortBy) {
      case "Price: Low to High":
        sorted.sort((a, b) => (a.new_price || 0) - (b.new_price || 0));
        break;
      case "Price: High to Low":
        sorted.sort((a, b) => (b.new_price || 0) - (a.new_price || 0));
        break;
      case "Newest":
        // Assuming newer products have higher IDs
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "Customer Rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default: // "Most Popular"
        // Keep original order or implement popularity logic
        sorted.sort((a, b) => a.id - b.id);
        break;
    }
    
    setFilteredProducts(sorted);
    setCurrentPage(1); // Reset to first page when sorting
  };
  
  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };
  
  const closeSortDropdown = () => {
    setIsSortDropdownOpen(false);
  };
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of product listing
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    // Toggle body scroll when filter is open on mobile
    if (!isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  
  const closeFilter = () => {
    setIsFilterOpen(false);
    document.body.style.overflow = 'unset';
  };
  
  const applyFilters = useCallback((filters) => {
    // Apply filters to products
    let filtered = [...products];
    
    // Apply price range filter
    if (filters.priceRange && filters.priceRange.length === 2) {
      const [minPrice, maxPrice] = filters.priceRange;
      filtered = filtered.filter(product => 
        (product.new_price || 0) >= minPrice && 
        (product.new_price || 0) <= maxPrice
      );
    }
    
    // Apply category filters
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    
    // Apply color filters
    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors && filters.colors.some(color => product.colors.includes(color))
      );
    }
    
    // Apply size filters
    if (filters.sizes && filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes && filters.sizes.some(size => product.sizes.includes(size))
      );
    }
    
    // Apply style filters
    if (filters.styles && filters.styles.length > 0) {
      filtered = filtered.filter(product => 
        filters.styles.includes(product.style)
      );
    }
    
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  }, [products]);
  
  // Aliases for component compatibility
  const showMobileFilters = isFilterOpen;
  const toggleMobileFilters = toggleFilter;
  const handleApplyFilters = applyFilters;
  
  // Cleanup effect for body scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Update filtered products when products prop changes
  useEffect(() => {
    if (products && products.length > 0) {
      setFilteredProducts(products);
      setCurrentPage(1);
    }
  }, [products]);

  // Apply filters when filters prop changes
  useEffect(() => {
    if (filters) {
      applyFilters(filters);
    } else if (products && products.length > 0) {
      setFilteredProducts(products);
      setCurrentPage(1);
    }
  }, [filters, products, applyFilters]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSortDropdownOpen && !event.target.closest('.sort-dropdown')) {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSortDropdownOpen]);
  
  return {
    // State
    sortBy,
    currentPage,
    filteredProducts,
    currentProducts,
    isFilterOpen,
    showMobileFilters,
    isSortDropdownOpen,
    
    // Data
    sortOptions,
    
    // Computed values
    paginationInfo,
    paginationItems,
    
    // Utilities
    renderStars,
    
    // Actions
    handleSortChange,
    handlePageChange,
    toggleFilter,
    toggleMobileFilters,
    toggleSortDropdown,
    closeSortDropdown,
    closeFilter,
    applyFilters,
    handleApplyFilters,
  };
};
