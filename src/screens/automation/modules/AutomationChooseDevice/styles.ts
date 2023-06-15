import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  headerContainer: {
    marginBottom: 12
  },
  headline: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    color: '#000',
    marginTop: 20
  },
  plusButton: {
    position: 'absolute',
    right: 0,
    top: 2,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  selected: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  spacing: {
    marginTop: 20
  },
  listContainer: {
    paddingHorizontal: 10
  },
  listItems: {
    justifyContent: 'space-around'
  },
  switchButtonsSpacing: {
    marginBottom: 10
  }
});

export default styles;
