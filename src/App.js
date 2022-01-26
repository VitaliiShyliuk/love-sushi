import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./style.scss";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import Cartpage from "./pages/Cartpage";
import Layout from "./components/Layout";

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
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cartItems={cartItems}
              addProductToCart={(product) =>
                addProductToCart(cartItems, product, setCartItems)
              }
            />
          }
        >
          <Route
            index
            element={
              <Homepage
                cartItems={cartItems}
                addProductToCart={(product) =>
                  addProductToCart(cartItems, product, setCartItems)
                }
                removeProductInCart={(product) =>
                  removeProductInCart(product, cartItems, setCartItems)
                }
              />
            }
          />
          <Route
            path="/products"
            element={
              <Productspage
                cartItems={cartItems}
                addProductToCart={(product) =>
                  addProductToCart(cartItems, product, setCartItems)
                }
                removeProductInCart={(product) =>
                  removeProductInCart(product, cartItems, setCartItems)
                }
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cartpage
                removeProductInCart={(product) =>
                  removeProductInCart(product, cartItems, setCartItems)
                }
                minusQtyProductInCart={(product) =>
                  minusQtyProductInCart(
                    cartItems,
                    product,
                    findProductInCart,
                    setCartItems,
                    removeProductInCart
                  )
                }
                plusQtyProductInCart={(product) =>
                  plusQtyProductInCart(
                    cartItems,
                    product,
                    findProductInCart,
                    setCartItems
                  )
                }
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
