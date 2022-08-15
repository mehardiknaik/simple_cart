export const intialState = {
  products: [],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
