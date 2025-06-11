import Breadcrumb from "../../components/Breadcrumb";
import FilterPanel from "../../sections/FilterPanel";
import ProductListing from "../../sections/ProductListing";
import Contact from "../../sections/Contact";
import products from "../../assets/products";
const CategoryPage = () => {
  const previousList = [{ title: "Home", link: "/" }];

  const handleApplyFilters = (filters) => {
    console.log("Applied filters:", filters);
  };

  return (
    <>
      <Breadcrumb previous_list={previousList} current="Cart" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </div>

          <div className="col-lg-9">
            <ProductListing products={products.slice(0, 9)} />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default CategoryPage;
