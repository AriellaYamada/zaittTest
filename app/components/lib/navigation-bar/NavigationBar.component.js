import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MTIcon from 'react-native-vector-icons/MaterialIcons';
import style from './navigationBar.style';

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={style.bar}>
        <View style={style.button}>
          <Icon name="store" size={30} color={this.props.buttonColor}/>
        </View>
        <View style={style.button}>
          <MCIcon name="account" size={30} color="#fff"/>
        </View>
        <View style={style.mainButton}>
          <MCIcon name="qrcode-scan" color="#fff" size={40} />
        </View>
        <View style={style.button}>
          <MTIcon name="shopping-basket" size={30} color="#fff"/>
        </View>
        <View style={style.button}>
          <MTIcon name="search" size={30} color="#fff"/>
        </View>
      </View>
    );
  }
}
