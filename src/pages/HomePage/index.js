import products from "../../assets/products";
import Brands from "../../sections/Brands";
import DressStyle from "../../sections/DressStyle";
import Hero from "../../sections/Hero";
import Products from "../../sections/Products";
import Contact from "../../sections/Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Products title="NEW ARRIVALS" products={products.slice(0, 4)} />
       <Products title="TOP SELLING" products={products.slice(4, 8)} />
       <DressStyle />
       <Contact />
    </div>
  );
};

export default HomePage;
