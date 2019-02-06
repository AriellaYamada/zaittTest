import { SET_CART, CLEAR_CART } from '../actions/cartActions';

const INITIAL_STATE = {
  addedItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART: return { ...state, ...action.data };
    case CLEAR_CART: return { INITIAL_STATE };
    default: return state;
  }
};
