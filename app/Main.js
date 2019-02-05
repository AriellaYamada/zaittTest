import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withRouter, Route } from 'react-router-native';
import MainController from './MainController';
import { NavigationBar } from './components';

import { setMainAction } from './actions/mainActions';

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
        <NavigationBar />
      </View>
    );
  }
}

const ACTIONS = {
  setMainAction
};

const MAP = (state) => {
  return {
    main: state.main
  };
};

export default withRouter(connect(MAP, ACTIONS)(Main));
