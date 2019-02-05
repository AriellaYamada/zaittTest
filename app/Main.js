import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

import { withRouter, Route } from  'react-router-native';


class Main extends Component {
  constructor(props) {

  }

  componentWillMount() {
    axios.get('HTTP://STAGING.ZAITT3.ZAITTGROUP.COM/API/V1/STORES/1/INIT').then(response => console.log(response));
  }
  
  render() {
    return (
      <View>
        <Text>Aqui</Text>
      </View>
    );
  }
}
