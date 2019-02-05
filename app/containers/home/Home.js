import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-native';

import { HomeHeader, SectionSlider } from '../../components';

import { setMainAction } from '../../actions/mainActions';

import { View, ScrollView, StyleSheet } from 'react-native';
import style from './home.style';
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: ''
    };

    this.renderSections = this.renderSections.bind(this);
  }

  renderSections() {
    const { titles } = this.props.main;
    const sections = Object.values(titles);
    if(titles) {
      return titles.map((title, index) => {
        return <SectionSlider {...title} key={index}/>;
      });
    }
  }

  render() {
    if(this.props.main.app) {
      const { name, app: { header, logo, button_background_color } } = this.props.main;
      return (
        <View style={style.view}>
          <ScrollView style={style.scrollView}>
            <HomeHeader
              backgroundImage={header}
              logo={logo}
              location={name}
              buttonColor={button_background_color}
            />
            {this.renderSections()}
          </ScrollView>
        </View>
      );
    }
    return null;
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

export default connect(MAP, ACTIONS)(Home);
