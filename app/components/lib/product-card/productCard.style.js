import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    height: 80,
    width,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',

  },
  image: {
    height: 70,
    width: 70,
    margin: 5,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '60%'
  },
  name: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 2,
    marginBottom: 2
  },
  description: {
    fontSize: 10,
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 3,
    marginBottom: 3
  }
});
