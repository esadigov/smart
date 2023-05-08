import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerContainer: {
    marginBottom: 30,
  },
  headline: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    color: '#000',
    marginTop: 20,
    marginBottom: 15,
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
  },
  spacing: {
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listItems: {
    justifyContent: 'space-around',
    marginHorizontal: -5,
  },
  switchButtonsSpacing: {
    marginBottom: 10,
  },
});

export default styles;
