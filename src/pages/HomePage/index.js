import products from "../../assets/products";
import Brands from "../../sections/Brands";
import Contact from "../../sections/Contact";
import DressStyle from "../../sections/DressStyle";
import Hero from "../../sections/Hero";
import Products from "../../sections/Products";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Products title="NEW ARRIVALS" products={products.slice(0, 4)} />
       <Products title="TOP SELLING" products={products.slice(4, 8)} />
       <DressStyle />
       <Contact />
    </>
  );
};

export default HomePage;
