import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6
  },
  spacing: {
    gap: 16
  },
  main: {
    flexDirection: 'row',
    gap: 18
  },
  time: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16,
    color: '#B8B8B8'
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16,
    color: '#525252',
    flex: 1
  },
  message: {
    alignSelf: 'flex-start',
    left: 57,
    borderRadius: 4,
    gap: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  messageText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 15,
    fontSize: 10
  }
});

export default styles;
