import React from "react";
import Product from "./Product";

const ProductsList = ({
  filteredProducts,
  ...props
}) => {
  return (
    <div {...props}>
      {filteredProducts.map((product) => (
        <Product
        className="products-list__item"
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
