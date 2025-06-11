import React, { useState } from "react";
import "./FilterPanel.css";
import PriceRangeFilter from "../../components/PriceRangeFilter";

const FilterPanel = ({ onApplyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  const colors = [
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
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const styles = ["Casual", "Formal", "Party", "Gym"];

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

  // const clearAllFilters = () => {
  //   setSelectedCategories([]);
  //   setPriceRange([50, 200]);
  //   setSelectedColors([]);
  //   setSelectedSizes([]);
  //   setSelectedStyles([]);
  // };

  return (
    <div className="filter-panel border rounded-4">
      <div className="filter-header">
        <h4 className="filter-title">Filters</h4>
        <i className="bi bi-sort-down fs-4 text-secondary"></i>
      </div>

      <div className="filter-content">
        {/* Categories */}
        <div className="filter-section">
          <div className="category-list">
            {categories.map((category) => (
              <div
                key={category}
                className={`category-item ${
                  selectedCategories.includes(category) ? "selected" : ""
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                <span>{category}</span>
                <i className="bi bi-chevron-right"></i>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <PriceRangeFilter onPriceChange={handlePriceChange} />

        {/* Colors */}
        <div className="filter-section">
          <div className="filter-section-header">
            <h6>Colors</h6>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="color-grid">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-option ${
                  selectedColors.includes(color.name) ? "selected" : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorToggle(color.name)}
                title={color.name}
              >
                {selectedColors.includes(color.name) && (
                  <i className="bi bi-check color-check"></i>
                )}
                {color.name === "White" && <div className="white-border"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="filter-section">
          <div className="filter-section-header">
            <h6>Size</h6>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="size-flex">
            {sizes.map((size) => (
              <button
                key={size}
                className={`filter-size-option ${
                  selectedSizes.includes(size) ? "selected" : ""
                }`}
                onClick={() => handleSizeToggle(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style */}
        <div className="filter-section">
          <div className="filter-section-header">
            <h6>Dress Style</h6>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="style-list">
            {styles.map((style) => (
              <div
                key={style}
                className={`style-item ${
                  selectedStyles.includes(style) ? "selected" : ""
                }`}
                onClick={() => handleStyleToggle(style)}
              >
                <span>{style}</span>
                <i className="bi bi-chevron-right"></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Actions */}
      <div className="filter-actions">
        {/* <button
          className="btn btn-outline-secondary btn-clear"
          onClick={clearAllFilters}
        >
          Clear All
        </button> */}
        <button className="btn btn-dark btn-apply" onClick={handleApplyFilters}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
