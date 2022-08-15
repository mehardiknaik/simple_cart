export const intialState = {
  products: [],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "addToCart":
      return { ...state, cart: [...state.cart, action.payload] };
    case "updateCart":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e
        ),
      };
    default:
      return state;
  }
};
