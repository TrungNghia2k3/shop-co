import Breadcrumb from "../../components/Breadcrumb";
import Contact from "../../sections/Contact";
import Cart from "../../sections/Cart";
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
