import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
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
      availableQuantity: 0
    };

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(product) {
    let amount = 0;
    const item = this.props.cart.find(({ id }) => id == product.id);
    if(item) amount = item.amount;
    if(amount > 0) {
      return (
        <View>
          <TouchableHighlight onPress={() => this.props.removeFromCart(product.id, 1)}><Text>-</Text></TouchableHighlight>
          <TouchableHighlight><Text>{amount}</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.addToCart(product)}><Text>+</Text></TouchableHighlight>
        </View>
      );
    }
    return <TouchableHighlight onPress={() => this.props.addToCart(product)}><Text>COMPRAR</Text></TouchableHighlight>;
  }

  render() {
    const { picture_url, name, brand, price, description, quantity, id } = this.props;
    const product = {
      picture_url,
      name,
      brand,
      price,
      description,
      quantity,
      id
    };

    return(
      <View style={style.card}>
        <Image style={style.image} source={{ uri: picture_url }} />
        <View style={style.info}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.description}>{description}</Text>
          <Text style={style.price}>R${price/100}</Text>
        </View>
        {this.renderButton(product)}
      </View>
    );
  }
}
