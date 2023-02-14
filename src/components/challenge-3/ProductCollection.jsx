import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import CategoryCollection from "./CategoryCollection";

const parseCategories = (data) => {
  return data.reduce((acc, current) => {
    const type = current.product_type;
    if (acc[`${type}`]) {
      acc[`${type}`].push(current);
    } else {
      acc[`${type}`] = [current];
    }
    return acc;
  }, {});
};


const ProductCollection = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.allbirds.com/products.json?limit=150"
      );
      const d = await response.json();
      const { products } = d;
      if (products) setData(parseCategories(products));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="super-center">
      <ClipLoader size={150} />;
      </div>
  }
  if (data) {
    return (
      <div className="container-alt">
        {Object.entries(data).map((category, idx) => (
          <CategoryCollection
            key={`collection-${idx}`}
            categoryTitle={category[0]}
            categoryProducts={category[1]}
          />
        ))}
      </div>
    );
  }
  return <div>No data. Try refreshing the page</div>;
};

export default ProductCollection;
