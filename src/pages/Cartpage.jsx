import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../context";

const Cartpage = () => {
  const {
    cartItems, setCartItems
  } = useContext(CartContext);

  if (!cartItems.length)
    return (
      <div className="cart-page">
        <h2>Корзина пуста...</h2>
        <p className="underline">
          <Link to="/products">Можете перейти к товарам</Link>
        </p>
      </div>
    );
  const countPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0) || 0;
  return (
    <div className="cart-page">
      <a className="clear-cart" onClick={() => setCartItems([])}>
        Очистить
      </a>
      <table>
        <thead>
          <tr>
            <th>№:</th>
            <th className="table__text-left">Название:</th>
            <th>К-ство:</th>
            <th>Цена за 1шт:</th>
            <th>Цена:</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem, index) => (
            <CartItem
              index={index}
              cartItem={cartItem}
              key={cartItem.id}
            />
          ))}
          <tr>
            <td colSpan="4" className="table__text-right">
              <b>Итого:</b>
            </td>
            <td>{countPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Cartpage;
