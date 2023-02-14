import ProductCard from "./ProductCard";

const ProductCardList = ({products}) => {
    return <div className="product-cards-container">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
  </div>
}

export default ProductCardList;