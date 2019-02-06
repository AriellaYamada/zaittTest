import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MTIcon from 'react-native-vector-icons/MaterialIcons';

import style from './productCard.style';

export class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      quantity: 0,
      availableQuantity: 0,

      // this.renderButton = this.renderButton.bind(this);
    }
  }

  // renderButton() {
  //
  // }

  render() {
    const { picture_url, name, brand, price, description, quantity } = this.props;

    return(
      <View style={style.card}>
        <Image style={style.image} source={{ uri: picture_url }} />
        <View style={style.info}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.description}>{description}</Text>
          <Text style={style.price}>R${price/100}</Text>
        </View>
      </View>
    );
  }
}
