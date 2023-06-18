import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  list: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    backgroundColor: '#F7F7F7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filterIcon: {
    flexDirection: 'row',
    width: 48,
    height: 48,
    backgroundColor: '#3A6598',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginLeft: 4,
    left: -4
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'center',
    marginLeft: 15
  },
  date: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#343434'
  },
  forward: {
    marginRight: 5
  },
  header: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    color: '#000'
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 35.5,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  searchStyles: {
    marginRight: 10
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 8,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8
  },
  plusButton: {
    position: 'absolute',
    right: 0,
    top: 2,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginVertical: 12,
    marginHorizontal: 18
  }
});

export default styles;
