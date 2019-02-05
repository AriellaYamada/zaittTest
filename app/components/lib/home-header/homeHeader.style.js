import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width,
    padding: 30,
    position: 'absolute'
  },
  background: {
    backgroundColor: '#343C4D',
    padding: 20,
    height: 300,
    width
  },
  logo: {
    width: 140,
    height: 40,
  },
  textInput: {
    width: '90%',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  location: {
    fontWeight: 'bold'
  }
});
