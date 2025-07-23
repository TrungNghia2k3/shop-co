import React, { useState } from "react";
import products from "../../assets/products";
import Breadcrumb from "../../components/Breadcrumb";
import Contact from "../../sections/Contact";
import FilterPanel from "../../sections/FilterPanel";
import ProductListing from "../../sections/ProductListing";
import "./CategoryPage.css";

const CategoryPage = () => {
  const previousList = [{ title: "Home", link: "/" }];
  const [currentFilters, setCurrentFilters] = useState(null);

  const handleApplyFilters = (filters) => {
    setCurrentFilters(filters);
  };

  return (
    <>
      <Breadcrumb previous_list={previousList} current="Casual" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 desktop-filter-panel">
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </div>

          <div className="col-lg-9 mobile-full-width">
            <ProductListing products={products} filters={currentFilters} />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default CategoryPage;
