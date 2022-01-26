

export const findProductInCart = (cartItems, product) => {
  return cartItems.find((cartItem) => cartItem.id === product.id);
};

export const addProductToCart = (cartItems, product, setCartItems) => {
  setCartItems([...cartItems, { ...product }]);
};

export const plusQtyProductInCart = (cartItems, product, findProductInCart, setCartItems) => {
  const exist = findProductInCart(cartItems, product);
  if (exist) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty + 1 } : cartItem
      )
    );
  }
};

export const minusQtyProductInCart = (
  cartItems,
  product,
  findProductInCart,
  setCartItems,
  removeProductInCart
) => {
  const exist = findProductInCart(cartItems, product);
  if (exist && exist.qty > 1) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty - 1 } : cartItem
      )
    );
  } else {
    removeProductInCart(product, cartItems, setCartItems);
  }
};
export const removeProductInCart = (product, cartItems, setCartItems) => {
  setCartItems([...cartItems].filter((cartItem) => cartItem.id !== product.id));
};
