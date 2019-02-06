import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withRouter, Route } from 'react-router-native';
import MainController from './MainController';
import { NavigationBar } from './components';

import { setMainAction } from './actions/mainActions';
import { setProductsAction } from './actions/productsActions';

class Main extends Component {
  constructor(props) {
    super(props);

    this.controller = new MainController(this);

  }

  async componentWillMount() {
    this.controller.setInitialVariables();
    // Orientation.lockToPortrait();
  }

  componentDidMount() {
    this.props.history.push('/home');
  }


  render() {
    return (
      <View>
        {this.props.children}
        <NavigationBar buttonColor={this.props.main.app ? this.props.main.app.button_background_color : "#fff"} />
      </View>
    );
  }
}

const ACTIONS = {
  setMainAction,
  setProductsAction
};

const MAP = (state) => {
  return {
    main: state.main,
    products: state.products
  };
};

export default withRouter(connect(MAP, ACTIONS)(Main));
