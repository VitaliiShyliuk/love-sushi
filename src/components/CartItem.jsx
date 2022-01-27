import React, { useContext } from "react";
import { CartContext } from "../context";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

const CartItem = ({ cartItem, ...props }) => {
  const {
    cartItems,
    setCartItems,
    removeProductInCart,
    minusQtyProductInCart,
    plusQtyProductInCart,
    findProductInCart,
  } = useContext(CartContext);

  return (
    <tr className="cart__item">
      <td>{props.index + 1}</td>
      <td className="table__text-left">{cartItem.name}</td>
      <td>
        <MyButton
          className="button-delete"
          onClick={() =>
            minusQtyProductInCart(
              cartItems,
              cartItem,
              findProductInCart,
              setCartItems,
              removeProductInCart
            )
          }
        >
          -
        </MyButton>

        <MyInput className="input-qty" value={cartItem.qty} disabled />
        <MyButton
          className="button-delete"
          onClick={() =>
            plusQtyProductInCart(
              cartItems,
              cartItem,
              findProductInCart,
              setCartItems
            )
          }
        >
          +
        </MyButton>
      </td>
      <td>{cartItem.price}</td>
      <td>{cartItem.price * cartItem.qty}</td>
      <td>
        <MyButton
          className="button-delete"
          onClick={() => removeProductInCart(cartItem, cartItems, setCartItems)}
        >
          Х
        </MyButton>
      </td>
    </tr>
  );
};

export default CartItem;
