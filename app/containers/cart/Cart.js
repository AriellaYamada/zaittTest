import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import { withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import style from './cart.style';

import { setProductsAction } from '../../actions/productsActions';

import { ProductCard } from '../../components';

import ProductsController from '../products/ProductsController';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.controller = new ProductsController(this);
  }

  renderProductsList() {
    const { addedItems } = this.props.cart;
    if(addedItems) {
      return addedItems.map((product, index) => {
        return(
          <ProductCard
            {...product}
            key={index}
            addToCart={this.controller.addToCart}
            removeFromCart={this.controller.removeFromCart}
            cart={addedItems}
          />
        );
      });
    }
    return null;
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps.cart);
  }

  render() {
    return(
      <View style={style.view}>
        <View style={style.sectionTitle}>
          <Icon name="arrow-left" size={20} style={style.backButton} onPress={() => this.props.history.push('/home')} />
          <Text style={style.sectionTitleText}>Carrinho</Text>
          <Icon />
        </View>

        <ScrollView style={style.scrollView}>
          {this.renderProductsList()}
        </ScrollView>
      </View>
    );
  }
}

const ACTIONS = {
  setProductsAction
};

const MAP = (state) => {
  return {
    cart: state.cart
  };
};

export default withRouter(connect(MAP, ACTIONS)(Cart));
