import formatMoney from "../../util/format-money";

const ProductCard = ({product}) => {
    const {imageSrc, bgSrc, title, description, ingredients, price} = product;
    const SUBSCRIBE_PRICE_MODIFIER = 0.85;

    return <article className="product-card">
        <section className="product-images">
            <img className="product-bg-image" src={bgSrc} alt={`${title} bg image`} />
            <img className="product-image" src={imageSrc} alt={`${title} hero image`} />
        </section>
        <section className="product-details">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="product-details-ingredients"><strong>Key Ingredients: </strong>{ingredients}</p>
        </section>
        <section className="product-cta">
            <button className="product-cta-btn">{`Add to Cart -------- ${formatMoney(price)}`}</button>
            <button className={`product-cta-btn ${title === "Shower Foam" ? 'btn-yellow' : title === "Sea Foam" ? 'btn-blue' : 'btn-red'}`}>{`Subscribe -------- ${formatMoney(price * SUBSCRIBE_PRICE_MODIFIER)}`}</button>
        </section>
    </article>
}

export default ProductCard;