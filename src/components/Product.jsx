import React, { useMemo, useRef, useState } from "react";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";
import MyModal from "./UI/MyModal";

const Product = ({
  product,
  addProductToCart,
  removeProductInCart,
  cartItems,
}) => {
  const [modalProduct, setModalProduct] = useState(false);

  const openModalProduct = () => {
    setModalProduct(true);
  };

  const closeModalProduct = () => {
    setModalProduct(false);
  };

  const checkProductInCart = useMemo(() => {
    return cartItems.find((cartItem) => cartItem.id === product.id);
  }, [product, cartItems]);

  const countInput = useRef();
  const handleClickAdd = () => {
    addProductToCart({
      ...product,
      qty: Number(countInput.current.value) || 1,
    });
  };
  const handleClickRemove = () => {
    removeProductInCart(product);
  };
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__section">
          <h3
            className="product__title"
            title="Подробнее"
            onClick={openModalProduct}
          >
            {product.name}
          </h3>
          <img
            title="Подробнее"
            onClick={openModalProduct}
            width={200}
            className="product__image"
            src={product.image}
            alt={product.name}
          ></img>
          <p className="product__description">
            <b>Описание:</b> {product.body}
          </p>
        </div>
        <div className="product__row">
          <p>
            <b>Цена:</b>
            <br />
            {product.price} грн.
          </p>
          <div className="product__buttons">
            {!checkProductInCart ? (
              <>
                <MyInput
                  title="К-ство"
                  className="input-qty"
                  type="text"
                  ref={countInput}
                  defaultValue="1"
                  maxLength="2"
                />

                <MyButton
                  title="Добавить в корзину"
                  className="button-add"
                  onClick={handleClickAdd}
                >
                  <span>+</span>
                </MyButton>
              </>
            ) : (
              <>
                <MyButton
                  title="Удалить"
                  className="button-delete"
                  onClick={handleClickRemove}
                >
                  <span>-</span>
                </MyButton>
              </>
            )}
            <MyModal visible={modalProduct} setVisible={setModalProduct}>
              <div className="modal-product">
                <span
                  className="modal-product__close close"
                  onClick={() => closeModalProduct()}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
