import React, { Component } from 'react';
import { View, ImageBackground, Image, TextInput, Text } from 'react-native';

import style from './homeHeader.style';

export class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <ImageBackground
          style={style.background}
          source={{ uri: this.props.backgroundImage }}
        >
          <Image
            style={style.logo}
            source={{ uri: this.props.logo }}
          />
          <TextInput style={style.textInput} editable={false} value="Você está em ">
            <Text style={style.location}>{this.props.location}</Text>
          </TextInput>
        </ImageBackground>
      </View>
    );
  }
}
