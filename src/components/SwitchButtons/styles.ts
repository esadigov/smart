import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F5F6FB',
    alignItems: 'center',
    borderRadius: 12,
    padding: 4
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 12
  },
  active: {
    backgroundColor: '#3A6598',
    shadowColor: '#000',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.06,
    shadowRadius: 24
  },
  activeText: {
    color: '#FFFFFF'
  },
  text: {
    color: '#3A6598',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500'
  }
});
