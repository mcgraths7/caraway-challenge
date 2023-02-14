import { useState } from "react";
import AnimatedButton from "../challenge-1/AnimatedButton";

import ProductCardAlt from "./ProductCardAlt";

const CategoryCollection = ({ categoryTitle, categoryProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProducts, setActiveProducts] = useState(
    categoryProducts.slice(0, 12)
  );

  const handleLoadMoreProducts = () => {
    const nextPage = currentPage + 1;
    setActiveProducts(categoryProducts.slice(0, 12 * nextPage))
    setCurrentPage(nextPage);
  }

  return (
    <div key={`collection ${categoryTitle}`} className="category-container">
      <h2>{categoryTitle}</h2>
      <div className="product-collection-alt">
        {activeProducts.map((product) => (
          <ProductCardAlt product={product} key={`product-${product.title}`} />
        ))}
      </div>
      {activeProducts.length !== categoryProducts.length && <AnimatedButton clickHandler={handleLoadMoreProducts}>Load more</AnimatedButton>}
    </div>
  );
};

export default CategoryCollection;
