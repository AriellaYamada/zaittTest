export const SET_CART = 'SET_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const setCartAction = (data) => {
  return {
    type: SET_CART,
    data
  };
};

export const clearCartAction = () => {
  return {
    type: CLEAR_CART
  };
};
