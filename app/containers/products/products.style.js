import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    height,
    width
  },
  sectionTitle: {
    marginTop: 15,
    height: 80,
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  scrollView: {
    marginBottom: 60
  }
});
