import React, { Component } from 'react';
import { View, ImageBackground, Image, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import style from './homeHeader.style';

export class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={style.view}>
        <ImageBackground
          style={style.background}
          source={{ uri: this.props.backgroundImage }}
        >
          <Image
            style={style.logo}
            source={{ uri: this.props.logo }}
          />
          <TextInput style={style.textInput} editable={false}>
            <Text>Você está em </Text>
            <Text style={style.location}>{this.props.location}</Text>
            <Icon name="location-pin" size={20} color={this.props.buttonColor}/>
          </TextInput>
        </ImageBackground>
      </View>
    );
  }
}
