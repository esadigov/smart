import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 34,
    marginHorizontal: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  title: {
    position: 'absolute',
    top: -56,
    left: -6,
    lineHeight: 17,
    textAlign: 'left',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  icons: {
    height: 0,
  },
  listContainer: {
    paddingHorizontal: 0,
  },
  listItems: {
    justifyContent: 'flex-start',
  },
});

export default styles;