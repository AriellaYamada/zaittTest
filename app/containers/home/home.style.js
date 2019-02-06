import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    height,
    width
  },
  tabBar: {
    height: 30,
    width
  },
  scrollView: {
    marginBottom: 60
  }
});
