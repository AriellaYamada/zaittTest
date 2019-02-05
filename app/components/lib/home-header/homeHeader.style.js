import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    width,
    height: 300
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width,
    padding: 30,
    position: 'absolute'
  },
  background: {
    backgroundColor: '#343C4D',
    padding: 20,
    height: 300,
    width,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'center',
    marginTop: 40
  },
  location: {
    fontWeight: 'bold'
  }
});
