import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { default as mainReducer } from './reducers/mainReducer';
import { default as productsReducer } from './reducers/productsReducer';
import { default as cartReducer } from './reducers/cartReducer';

export default (() => {
  const initialState = {};
  const store = createStore(createReducer(), composeWithDevTools(applyMiddleware(thunk)));
  store.async = {};

  return store;
})();

export function registerReducer(store, name, reducer) {
	store.async[name] = reducer;
	store.replaceReducer(createReducer(store.async));
};

function createReducer(reducers) {
  return combineReducers({
    root: (state = null) => state,
    ...reducers,
    main: mainReducer,
    products: productsReducer,
    cart: cartReducer
  });
}
