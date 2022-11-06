import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
  profileOptionContainer: {
    borderRadius: 6,
    width: 164,
    margin: 10,
    paddingVertical: 76,
    paddingHorizontal: 20,
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
