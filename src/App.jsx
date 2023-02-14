import { useContext } from "react";

import AnimatedButton from "./components/challenge-1/AnimatedButton";
import ProductCardList from './components/challenge-2/ProductCardList';
import ProductCollection from "./components/challenge-3/ProductCollection";

import showerProdImg from "./assets/shower-product.png";
import showerBgImg from "./assets/shower-bg.jpg";
import seaProdImg from "./assets/foam-product.png";
import seaBgImg from "./assets/foam-bg.jpg";
import sweetProdImg from "./assets/fluffy-product.png";
import sweetBgImg from "./assets/fluffy-bg.jpg";
import Layout from "./components/layout/Layout";
import { PageContext } from "./context/PageContext";

const products = [
  {
    imageSrc: showerProdImg,
    bgSrc: showerBgImg,
    title: "Shower Foam",
    description: "Motivation and focus*",
    ingredients: "Warm Sugar, Vanilla, Fresh Pancakes",
    price: 5000,
    id: 1,
  },
  {
    imageSrc: seaProdImg,
    bgSrc: seaBgImg,
    title: "Sea Foam",
    description: "Connection and joy*",
    ingredients: "Sea Salt, Beach Water, Fresh Coconut, Sprinkles",
    price: 5000,
    id: 2,
  },
  {
    imageSrc: sweetProdImg,
    bgSrc: sweetBgImg,
    title: "Sweet Fluffy",
    description: "Deep, restorative sleep*",
    ingredients: "Fresh Berries, Rainbow Sprinkles, Fairy Floss",
    price: 5000,
    id: 3,
  },
];

function App() {
  const {activePage} = useContext(PageContext);

  return (
    <Layout>
      {activePage === 0 && (
        <div className="container">
          <AnimatedButton>Add to Cart</AnimatedButton>
        </div>
      )}
      {activePage === 1 && <ProductCardList products={products} />}

      {activePage === 2 && <ProductCollection />}
    </Layout>
  );
}

export default App;
