import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-native';

import HomeController from './HomeController';

import { setMainAction } from '../../actions/mainActions';

import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: {}
    };

    this.controller = new HomeController(this);
  }

  componentWillMount() {
    this.controller.setInitialVariables();
  }

  render() {
    const { total, name } = this.state.msg;

    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  }
}

const ACTIONS = {
  setMainAction
};

const MAP = (state) => {
  console.log(state);
  return {
    main: state.main
  };
};

export default connect(MAP, ACTIONS)(Home);
