import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 3
  },
  inputContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingLeft: 13
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins',
    alignSelf: 'stretch',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#000'
  },
  inputIcon: {
    position: 'absolute',
    right: 15
  }
});

export default styles;
