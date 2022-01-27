import React, { useState, useMemo } from "react";
import Product from "../components/Product";
import ProductsList from "../components/ProductsList";
import MyInput from "../components/UI/MyInput";
import { data } from "../data/data";

const Productspage = () => {
  const [products, setProducts] = useState(data || []);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = useMemo(() => {
    if (searchQuery) {
      return products.filter((product) =>
        product.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else return products;
  }, [products, searchQuery]);

  return (
    <div className="products">
      <div className="products-header">
      <h3 className="products-header__title">{searchQuery? 'Поиск... '+searchQuery  : "Меню:" }</h3>
      <MyInput
        className="products-header__input-search input-search"
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <ProductsList className="products-list" filteredProducts={filteredProducts} />
    </div>
  );
};

export default Productspage;
