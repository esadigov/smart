import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 21,
    paddingBottom: 15,
    paddingHorizontal: 8,
    width: 336,
    height: 254,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    borderRadius: 6
  },
  icon: {
    flex: 7,
    alignItems: 'center'
  },
  mainTextContainer: {
    flex: 6,
    alignItems: 'center',
    bottom: 2
  },
  mainText: {
    color: '#353535',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16
  },
  subTextContainer: {
    alignItems: 'center',
    bottom: 12
  },
  subText: {
    color: '#A0A0A0',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    paddingVertical: 12,
    marginHorizontal: 6
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19
  }
});

export default styles;
