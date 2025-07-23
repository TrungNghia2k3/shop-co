import { useState } from "react";

const useFilterPanel = (onApplyFilters) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([80, 320]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  // Filter data
  const filterData = {
    categories: ["T-Shirts", "Shorts", "Shirts", "Hoodies", "Jeans", "Jackets", "Pants", "Polo"],
    colors: [
      { name: "Green", value: "#22c55e" },
      { name: "Red", value: "#ef4444" },
      { name: "Yellow", value: "#eab308" },
      { name: "Orange", value: "#f97316" },
      { name: "Light Blue", value: "#06b6d4" },
      { name: "Blue", value: "#3b82f6" },
      { name: "Purple", value: "#8b5cf6" },
      { name: "Pink", value: "#ec4899" },
      { name: "White", value: "#ffffff" },
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#1e293b" },
      { name: "Gray", value: "#6b7280" },
      { name: "Beige", value: "#d2b48c" },
      { name: "Khaki", value: "#f0e68c" },
      { name: "Olive", value: "#808000" },
    ],
    sizes: [
      "XX-Small",
      "X-Small", 
      "Small",
      "Medium",
      "Large",
      "X-Large",
      "XX-Large",
      "3X-Large",
      "4X-Large",
    ],
    styles: ["Casual", "Formal", "Party", "Gym", "Smart Casual", "Sports"],
  };

  // Filter handlers
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleStyleToggle = (style) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleApplyFilters = () => {
    const filters = {
      categories: selectedCategories,
      priceRange,
      colors: selectedColors,
      sizes: selectedSizes,
      styles: selectedStyles,
    };
    onApplyFilters(filters);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([80, 320]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedStyles([]);
  };

  // Get active filter count
  const getActiveFilterCount = () => {
    return (
      selectedCategories.length +
      selectedColors.length +
      selectedSizes.length +
      selectedStyles.length +
      (priceRange[0] !== 80 || priceRange[1] !== 320 ? 1 : 0)
    );
  };

  // Check if specific filter type has selections
  const hasActiveFilters = {
    categories: selectedCategories.length > 0,
    colors: selectedColors.length > 0,
    sizes: selectedSizes.length > 0,
    styles: selectedStyles.length > 0,
    price: priceRange[0] !== 80 || priceRange[1] !== 320,
  };

  // Get current filter state
  const currentFilters = {
    selectedCategories,
    selectedColors,
    selectedSizes,
    selectedStyles,
    priceRange,
  };

  return {
    // State
    currentFilters,
    
    // Data
    filterData,
    
    // Computed values
    activeFilterCount: getActiveFilterCount(),
    hasActiveFilters,
    
    // Handlers
    handleCategoryToggle,
    handleColorToggle,
    handleSizeToggle,
    handleStyleToggle,
    handlePriceChange,
    handleApplyFilters,
    clearAllFilters,
  };
};

export default useFilterPanel;
