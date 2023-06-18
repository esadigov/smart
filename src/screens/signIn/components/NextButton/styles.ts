import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  nextButtonOff: {
    backgroundColor: '#CBCBCB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CBCBCB'
  },
  nextButtonOn: {
    backgroundColor: '#3A6598',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3A6598'
  },
  nextTextOff: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
    color: '#7A7A7A'
  },
  nextTextOn: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
    color: '#FFF'
  }
});

export default styles;
