import React, { useState } from "react";
import ProductsList from "../components/ProductsList";
import MySlider from "../components/UI/MySlider";
import { stocks } from "../data/data";
import { data } from "../data/data";

const Homepage = () => {
  const [products, setProducts] = useState(data || []);

  return (
    <div className="homepage">
      <h1 className="homepage__title">love&sushi</h1>
      <MySlider stocks={stocks}></MySlider>
      <h2 className="homepage__subtitle">Новинки:</h2>
      <ProductsList
        filteredProducts={products}
        className="products-list"
      ></ProductsList>
    </div>
  );
};

export default Homepage;
