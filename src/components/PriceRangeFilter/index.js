// Component React
import React, { useState, useRef, useCallback, useEffect } from "react";
import "./PriceRangeFilter.css"; 

const PriceRangeFilter = ({ onPriceChange }) => {
  const [minVal, setMinVal] = useState(50);
  const [maxVal, setMaxVal] = useState(200);
  const minValRef = useRef(50);
  const maxValRef = useRef(200);
  const range = useRef(null);

  const min = 50;
  const max = 200;

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Handle min slider change
  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    onPriceChange && onPriceChange([value, maxVal]);
  };

  // Handle max slider change
  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
    onPriceChange && onPriceChange([minVal, value]);
  };

  // Update range bar position and width
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  return (
    <div className="filter-section">
      <div className="filter-section-header">
        <h6>Price</h6>
        <i className="bi bi-chevron-up"></i>
      </div>

      <div className="price-range">
        <div className="dual-slider-container">
          <div className="dual-slider-track"></div>
          <div className="dual-slider-range" ref={range}></div>

          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={handleMinChange}
            className="dual-slider-input dual-slider-input--left"
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={handleMaxChange}
            className="dual-slider-input dual-slider-input--right"
          />
        </div>

        <div className="price-values">
          <span>${minVal}</span>
          <span>${maxVal}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
