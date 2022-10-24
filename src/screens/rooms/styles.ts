import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
  },
  searchStyles: {
    marginRight: 10,
  },
  plusButton: {
    position: 'absolute',
    right: 10,
    top: 2,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  searchContainer: {
    marginVertical: 20,
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
