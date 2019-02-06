import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    height,
    width
  },
  sectionTitle: {
    marginTop: 15,
    width,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButton: {
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  scrollView: {
    marginBottom: 60
  },
  tabBar: {
    height: 30,
    marginTop: 3,
    marginBottom: 3
  },
  tab: {
    height: 20,
    width: width/3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontWeight: '400',
    fontSize: 15
  },
  selectedTab: {
    height: 20,
    width: width/3,
    borderBottomWidth: 5,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedTabText: {
    fontWeight: '700',
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
