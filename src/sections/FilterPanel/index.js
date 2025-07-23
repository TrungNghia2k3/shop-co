import React from "react";
import "./FilterPanel.css";
import PriceRangeFilter from "../../components/PriceRangeFilter";
import { useFilterPanel } from "../../hooks";

const FilterPanel = ({ onApplyFilters }) => {
  const {
    // State
    currentFilters: {
      selectedCategories,
      selectedColors,
      selectedSizes,
      selectedStyles,
      priceRange,
    },
    
    // Data
    filterData: { categories, colors, sizes, styles },
    
    // Computed values
    activeFilterCount,
    hasActiveFilters,
    
    // Handlers
    handleCategoryToggle,
    handleColorToggle,
    handleSizeToggle,
    handleStyleToggle,
    handlePriceChange,
    handleApplyFilters,
    clearAllFilters,
  } = useFilterPanel(onApplyFilters);

  return (
    <div className="filter-panel border rounded-4">
      <div className="filter-header">
        <h4 className="filter-title">
          Filters
          {activeFilterCount > 0 && (
            <span className="filter-count">({activeFilterCount})</span>
          )}
        </h4>
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
        <PriceRangeFilter 
          onPriceChange={handlePriceChange} 
          initialRange={priceRange}
        />

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
        {activeFilterCount > 0 && (
          <button
            className="btn btn-outline-secondary btn-clear"
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        )}
        <button className="btn btn-dark btn-apply" onClick={handleApplyFilters}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
