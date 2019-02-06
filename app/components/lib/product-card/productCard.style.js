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
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  addButton: {
    width: 30,
    margin: 3,
  },
  amountText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700'
  },
  buttonText: {
    fontSize: 25,
    color: '#43e891'
  },
  buyButton: {
    padding: 5,
    backgroundColor: '#43e891',
    borderRadius: 20,
    height: 30
  }
});
