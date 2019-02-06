import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, StyleSheet, Text, ScrollView } from 'react-native';
import { withRouter } from 'react-router-native';

import style from './products.style';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: ''
    };
  }

  renderCategories() {
    const { category } = this.props.match.params;
  }

  render() {
    const { section, category } = this.props.match.params;

    return(
      <View style={style.view}>
        <View style={style.sectionTitle}><Text style={style.sectionTitleText}>{section}</Text></View>

        <ScrollView horizontal style={style.tabBar}>
          {this.renderCategories()}
        </ScrollView>
        <ScrollView style={style.scrollView}></ScrollView>
      </View>
    );
  }
}

export default withRouter(Products);
