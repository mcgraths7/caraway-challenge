import { useState, useEffect, useRef } from "react";

import AnimatedButton from '../challenge-1/AnimatedButton';
import isNew from "../../util/is-new";
import parseTitle from "../../util/parse-title";

const ProductCardAlt = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageRef = useRef();

  const isOnSale = () => {
    const p = product.variants[0];
    const comparePrice = parseFloat(p.compare_at_price);
    const currentPrice = parseFloat(p.price);
    if (Number.isNaN(comparePrice)) return false;
    if (comparePrice === 0) return false;
    if (currentPrice === comparePrice) return false;
    return true;
  }

  useEffect(() => {
    if (imageRef && imageRef.current) {
      imageRef.current.addEventListener("mouseenter", () => {
        setActiveImageIndex(1);
      });
      imageRef.current.addEventListener("mouseleave", () => {
        setActiveImageIndex(0);
      });
    //   return () => {
    //     imageRef?.current && imageRef.current.removeEventListener("mouseenter", () => {
    //       setActiveImageIndex(1);
    //     });
    //     imageRef.current.removeEventListener("mouseleave", () => {
    //       setActiveImageIndex(0);
    //     });
    //   };
    }
  }, []);

  return (
    <article className="product-card-alt" key={product.id}>
      <section className="product-card-alt-images">
        <img
          src={product.images[activeImageIndex ?? 0].src}
          width={400}
          height={400}
          alt="Main photo"
          ref={imageRef}
        />
        {isNew(product.published_at) && (
          <span className="product-card-alt-new-pill">New!</span>
        )}
      </section>
      <section className="product-card-alt-details">
        <div className="product-card-alt-title">
          <h3>{parseTitle(product.title).name}</h3>
          <div className="product-card-alt-price">
            <p>{`$${product.variants[0].price}`}</p>
            {isOnSale() && <p className={isOnSale() ? 'strikeout' : ''}>{`$${product.variants[0].compare_at_price}`}</p>}
          </div>
        </div>
        <div className="product-card-alt-options">
          <p>
            <em>{parseTitle(product.title).color}</em>
          </p>
          <p>
            <em>{`${product.variants.length} styles`} </em>
          </p>
        </div>
      </section>
      <section className="product-card-alt-cta">
        <p>Size Selector</p>
        <AnimatedButton
          clickHandler={() => alert("boop!")}
        >
          Add to Cart
        </AnimatedButton>
      </section>
    </article>
  );
};

export default ProductCardAlt;
