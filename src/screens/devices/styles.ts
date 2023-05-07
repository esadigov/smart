import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 32,
  },
  headerContainer: {
    marginBottom: 32,
  },
  headline: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 8,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
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
