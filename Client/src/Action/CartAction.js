export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItems = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  if (cartItems.quantity > 10) {
    alert("You cannot order more than 10");
  } else {
    if (cartItems.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItems });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().CartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().CartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
