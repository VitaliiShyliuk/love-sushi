import React from "react";
import Product from "./Product";

const ProductsList = ({
  filteredProducts,
  addProductToCart,
  removeProductInCart,
  cartItems,
  ...props
}) => {
  return (
    <div {...props}>
      {filteredProducts.map((product) => (
        <Product
        className="products-list__item"
          cartItems={cartItems}
          addProductToCart={addProductToCart}
          removeProductInCart={removeProductInCart}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
