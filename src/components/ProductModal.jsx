import React from "react";
import MyModal from "./UI/MyModal";

const ProductModal = ({
  product,
  visibleModalProduct,
  setVisibleModalProduct,
}) => {

  return (
    <MyModal visibleModal={visibleModalProduct} setVisibleModal={setVisibleModalProduct}>
      <div className="modal-product">
        <span
          className="modal-product__close close"
          onClick={() => setVisibleModalProduct(false)}
        >
          &#10006;
        </span>
        <h3 className="modal-product__title" title={product.name}>
          {product.name}
        </h3>
        <img
          title={product.name}
          className="modal-product__image"
          src={product.image}
          alt={product.name}
        ></img>
        <p className="product__description">
          <b>Описание:</b> {product.body}
        </p>
        <p className="product__description">
          <b>Энергетическая ценность 100г:</b> {product.details}
        </p>
      </div>
    </MyModal>
  );
};

export default ProductModal;
