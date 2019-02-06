import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import Main from './app/Main';

import store from './app/store';

import { Home } from './app/containers/home';
import { Products } from './app/containers/products';
import { Cart } from './app/containers/cart';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Main>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='/products/:section/:category' component={Products} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </Main>
        </NativeRouter>
      </Provider>
    );
  }
}
