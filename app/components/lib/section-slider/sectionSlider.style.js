import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    height: 40,
    width,
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
  },
  scrollView: {
    height: 100,
    width,
  },
  image: {
    margin: 5,
    borderRadius: 10,
    minWidth: (width - 10)/3,
    justifyContent: 'flex-end',
    height: '100%',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    padding: 10
  }
});
