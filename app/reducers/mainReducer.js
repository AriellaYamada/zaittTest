import { SET_MAIN } from '../actions/mainActions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAIN: return { ...state, ...action.data };
    default: return state;
  }
};
