import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams();
  return <div>ProductDetailPage - {id}</div>;
};

export default ProductDetailPage;
