import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 32,
  },
  headline: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
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
  },
  switchButtonsSpacing: {
    marginBottom: 10,
  },
});

export default styles;
