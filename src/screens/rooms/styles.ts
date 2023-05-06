import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    color: '#000',
  },
  searchStyles: {
    marginRight: 10,
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
    marginHorizontal: 8,
  },
  searchContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listItems: {
    justifyContent: 'space-around',
  },
});

export default styles;
