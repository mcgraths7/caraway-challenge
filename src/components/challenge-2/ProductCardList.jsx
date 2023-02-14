import ProductCard from "./ProductCard";
import { Helmet } from "react-helmet";

const ProductCardList = ({ products }) => {
  return (
    <div className="product-cards-container">
      <Helmet title="Local Products | Caraway Challenge" />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
