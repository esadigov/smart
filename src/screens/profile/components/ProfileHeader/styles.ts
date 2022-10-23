import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  avatar: {
    height: 78,
    top: 12,
    left: 20,
    borderRadius: 48,
    flex: 1,
  },
  editButton: {
    position: 'absolute',
    backgroundColor: '#AED3FF',
    width: 25,
    height: 25,
    left: 80,
    top: 12,
    borderRadius: 18,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 36,
    height: 36,
    right: 42,
    top: 10,
    color: '#353535',
    flex: 4,
  },
  profileStatus: {
    position: 'absolute',
    width: 64,
    height: 27,
    left: 116,
    top: 51,
    backgroundColor: '#AED3FF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  statusText: {
    color: '#255B99',
  },
});

export default styles;
