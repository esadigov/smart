import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 2,
  },
  inputContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingLeft: 13,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    alignSelf: 'stretch',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 21,
    color: '#CCC',
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
  },
});

export default styles;
