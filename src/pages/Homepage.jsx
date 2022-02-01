import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ProductsService from "../API/ProductsService";
import StocksService from "../API/StocksService";
import ProductsList from "../components/ProductsList";
import Loader from "../components/UI/Loader/Loader";
import MySlider from "../components/UI/MySlider";
import { useFetching } from "./hooks/useFetching";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [fetchProducts, isLoadingProducts, errorProducts] = useFetching(async()=> {
    const productsData = await ProductsService.getLastAndLimit(3);
    setProducts(productsData);
  });
  const [fetchStocks, isLoadingStocks, errorStocks] = useFetching(async() => {
    const stocksData = await StocksService.getAll();
    setStocks(stocksData);
  })
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage__title">love&sushi</h1>
      {isLoadingStocks? <Loader/>: ''}
      <MySlider stocks={stocks}></MySlider>
      <h2 className="homepage__subtitle">Новинки:</h2>
      {isLoadingProducts? <Loader/> : ''}
      <ProductsList
        filteredProducts={products}
        className="products-list"
      ></ProductsList>
    </div>
  );
};

export default Homepage;
