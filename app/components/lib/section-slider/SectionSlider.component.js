import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';

import style from './sectionSlider.style';

export class SectionSlider extends Component {
  constructor(props) {
    super(props);

    this.renderTitle = this.renderTitle.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  renderTitle() {
    const { title } = this.props;
    if(title)
      return <Text style={style.title}>{title}</Text>;
    return null;
  }

  renderCards() {
    const { categories } = this.props;
    if(categories) {
      return categories.map((item, index) => {
        return (
          <ImageBackground key={index} style={style.image} source={{ uri: item.picture }}>
            <Text style={style.subtitle}>{item.category}</Text>
          </ImageBackground>
        );
      });
    }
    return null;
  }

  render() {
    const { title, categories } = this.props;
    return(
      <View style={style.view}>
        {this.renderTitle()}
        <ScrollView horizontal style={style.scrollView}>
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}
