import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context";

const CartLink = () => {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <Link className="cart-link__no-products" to="/cart">
        <img width={30} height={30} src=".\images\basket.svg" />
      </Link>
    );
  }

  const countPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0) || 0;
  return (
    <div className="cart-link">
      <Link className="cart-link__has-products" to="/cart">
        <img width={30} height={30} src=".\images\basket.svg" />
        <span>{countPrice + " грн."}</span>
      </Link>
    </div>
  );
};

export default CartLink;
