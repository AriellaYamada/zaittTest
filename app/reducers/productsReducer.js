import { SET_PRODUCTS } from '../actions/productsActions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_PRODUCTS: return { ...state, ...action.data };
    default: return state;
  }
};
