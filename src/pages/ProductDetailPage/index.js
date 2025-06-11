import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../sections/ProductDetail";
import Products from "../../sections/Products";
import products from "../../assets/products";
import Contact from "../../sections/Contact";
const ProductDetailPage = () => {
  const previousList = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "#" },
    { title: "Men", link: "#" },
  ];
  return (
    <>
      <Breadcrumb previous_list={previousList} current="T-shirts" />
      <ProductDetail />
      <Products title="TOP SELLING" products={products.slice(6, 10)} />
      <Contact />
    </>
  );
};

export default ProductDetailPage;
