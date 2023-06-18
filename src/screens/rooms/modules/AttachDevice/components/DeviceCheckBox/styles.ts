import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  checkbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 14,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 6
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
    lineHeight: 17
  },
  tick: {
    borderRadius: 58,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 24
  }
});

export default styles;
