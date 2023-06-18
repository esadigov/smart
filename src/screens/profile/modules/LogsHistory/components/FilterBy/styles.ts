import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    marginTop: 20,
    color: '#000'
  },
  saveContainer: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  save: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    color: '#3A6598'
  }
});

export default styles;
