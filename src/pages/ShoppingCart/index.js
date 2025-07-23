import Breadcrumb from "../../components/Breadcrumb";
import Cart from "../../sections/Cart";
import Contact from "../../sections/Contact";
const ShoppingCart = () => {
  const previousList = [{ title: "Home", link: "/" }];
  return (
    <>
      <Breadcrumb previous_list={previousList} current="Cart" />
      <Cart />
      <Contact />
    </>
  );
};

export default ShoppingCart;
