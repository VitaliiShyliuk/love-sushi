import React, { useContext, useMemo, useRef, useState } from "react";
import { CartContext } from "../context";
import ProductModal from "./ProductModal";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

const Product = ({ product }) => {
  const { cartItems, setCartItems, addProductToCart, removeProductInCart } =
    useContext(CartContext);

  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  const checkProductInCart = useMemo(() => {
    return cartItems.find((cartItem) => cartItem.id === product.id);
  }, [product, cartItems]);

  const countInput = useRef();
  const handleClickAdd = () => {
    addProductToCart(
      cartItems,
      {
        ...product,
        qty: Number(countInput.current.value) || 1,
      },
      setCartItems
    );
  };
  const handleClickRemove = () => {
    removeProductInCart(product, cartItems, setCartItems);
  };
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__section">
          <h3
            className="product__title"
            title="Подробнее"
            onClick={() => setVisibleModalProduct(true)}
          >
            {product.name}
          </h3>
          <img
            title="Подробнее"
            onClick={() => setVisibleModalProduct(true)}
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
            <ProductModal
              product={product}
              visibleModalProduct={visibleModalProduct}
              setVisibleModalProduct={setVisibleModalProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
