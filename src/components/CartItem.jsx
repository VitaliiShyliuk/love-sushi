import React from "react";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

const CartItem = ({
  cartItem,
  minusQtyProductInCart,
  plusQtyProductInCart,
  removeProductInCart,
  ...props
}) => {
  return (
    <tr className="cart__item">
      <td>{props.index + 1}</td>
      <td className="table__text-left">{cartItem.name}</td>
      <td>
        <MyButton
          className="button-delete"
          onClick={() => minusQtyProductInCart(cartItem)}
        >
          -
        </MyButton>

        <MyInput className="input-qty" value={cartItem.qty} disabled />
        <MyButton
          className="button-delete"
          onClick={() => plusQtyProductInCart(cartItem)}
        >
          +
        </MyButton>
      </td>
      <td>{cartItem.price}</td>
      <td>{cartItem.price * cartItem.qty}</td>
      <td>
        <MyButton
          className="button-delete"
          onClick={() => removeProductInCart(cartItem)}
        >
          Х
        </MyButton>
      </td>
    </tr>
  );
};

export default CartItem;
