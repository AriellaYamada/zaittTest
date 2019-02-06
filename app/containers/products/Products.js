import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import { withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { ProductCard } from '../../components';

import { setProductsAction } from '../../actions/productsActions';

import ProductsController from './ProductsController';

import style from './products.style';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
      selectedIndex: 0,
      pageIndex: 1
    };

    this.renderCategories = this.renderCategories.bind(this);
    this.renderProductsList = this.renderProductsList.bind(this);
    this.updateProductsList = this.updateProductsList.bind(this);
    this.controller = new ProductsController(this);
  }

  updateProductsList(category, index) {
    this.setState({ selectedCategory: category, selectedIndex: index });
    this.controller.getCategoryProducts(category);
  }

  renderCategories() {
    const { categories, selectedCategory } = this.state;
    const { section } = this.props.match.params;
    let index = 0;

    return categories.map((c, index) => {
      let selected = false;
      if(c.key_words == selectedCategory){
        selected = true};
      return(
        <TouchableHighlight
          key={index}
          style={selected ? style.selectedTab : style.tab}
          onPress={() => this.updateProductsList(c.key_words, index)}
        >
          <Text style={selected ? style.selectedTabText : style.tabText}>
            {c.category}
          </Text>
        </TouchableHighlight>
      );
    });
  }

  renderProductsList() {
    const { items } = this.props.products;
    if(items)
      return items.map((product, index) => <ProductCard {...product} key={index} />);
    return null;
  }

  componentWillMount() {
    const { section, category } = this.props.match.params;
    const { main } = this.props;
    const { pageIndex } = this.state;
    const selectedIndex = main.titles.findIndex(({ title }) => title == section);
    this.controller.getCategoryProducts(category, pageIndex);
    this.setState({ categories: main.titles[selectedIndex].categories, selectedCategory: category, selectedIndex });
  }

  componentWillUpdate() {
    console.log();
  }

  render() {
    const { section, category } = this.props.match.params;
    const x = this.state.selectedIndex;

    return(
      <View style={style.view}>
        <View style={style.sectionTitle}>
          <Icon name="arrow-left" size={20} style={style.backButton} onPress={() => this.props.history.push('/home')} />
          <Text style={style.sectionTitleText}>{section}</Text>
          <Icon />
        </View>

        <ScrollView horizontal
          style={style.tabBar}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderCategories()}
        </ScrollView>
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
    main: state.main,
    products: state.products
  };
};

export default withRouter(connect(MAP, ACTIONS)(Products));
