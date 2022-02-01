import React, { useState, useMemo, useEffect } from "react";
import Product from "../components/Product";
import ProductsList from "../components/ProductsList";
import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";
import ProductsService from "../API/ProductsService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import MyCategory from "../components/UI/MyCategory";

const Productspage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // const [activeButton, setActiveButton] = useState("");
  const [fetchProducts, isLoading, error] = useFetching(async () => {
    const products = await ProductsService.getAll();
    setProducts(products);
  });

  const categoriedProducts = useMemo(() => {
    if (category) {
      console.log("categoriedProducts");
      return products.filter((prod) => prod.category === category);
    } else {
      return products;
    }
  }, [category, products]);

  // const sortedProducts;

  const searchedProducts = useMemo(() => {
    if (searchQuery) {
      console.log("searchedProducts");
      return categoriedProducts.filter((product) =>
        product.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      return categoriedProducts;
    }
  }, [searchQuery, categoriedProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="products-header">
        <h3 className="products-header__title">
          {searchQuery ? "Поиск... " + searchQuery : "Меню:"}
        </h3>
        <MyInput
          className="products-header__input-search input-search"
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <MyCategory
        className="category product-category"
        category={category}
        categoriesData={[
          { value: "", name: "Все меню", image: "images/icons/lovesushi.svg" },
          { value: "roll", name: "Роллы", image: "images/icons/roll.jpg" },
          { value: "set", name: "Наборы", image: "images/icons/set.jpg" },
        ]}
        onClick={(value) => setCategory(value)}
      />
      {isLoading ? <Loader /> : ""}
      <ProductsList
        className="products-list"
        filteredProducts={searchedProducts}
      />
    </div>
  );
};

export default Productspage;
