import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/style.scss";
import Homepage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import Cartpage from "./pages/Cartpage";
import Layout from "./components/Layout";
import { CartContext } from "./context";

import {
  findProductInCart,
  addProductToCart,
  plusQtyProductInCart,
  minusQtyProductInCart,
  removeProductInCart,
} from "./methods/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        findProductInCart,
        addProductToCart,
        plusQtyProductInCart,
        minusQtyProductInCart,
        removeProductInCart,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/products" element={<Productspage />} />
              <Route path="/cart" element={<Cartpage />} />
              <Route path="*" element={<Homepage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
