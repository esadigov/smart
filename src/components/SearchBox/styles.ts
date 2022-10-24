import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputContainer: {
    backgroundColor: '#F5F6FB',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingLeft: 13,
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 21,
    color: '#9AA4C9',
  },
  inputIcon: {
    position: 'absolute',
    right: 15,
  },
});

export default styles;
