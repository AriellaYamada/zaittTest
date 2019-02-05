import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  bar: {
    width,
    height: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width:  '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainButton: {
    height: 90,
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#000'
  }
});
