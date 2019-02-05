import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import Main from './app/Main';

import store from './app/store';
import { Home } from './app/containers/home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Home />
        </NativeRouter>
      </Provider>
    );
  }
}
