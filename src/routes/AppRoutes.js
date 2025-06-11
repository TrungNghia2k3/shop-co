import { Route, Routes, Navigate } from "react-router";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShoppingCart  from "../pages/ShoppingCart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/product-detail" element={<ProductDetailPage />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />

       <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
