import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10
  },
  avatar: {
    height: 74,
    width: 74,
    borderRadius: 48
  },
  editButton: {
    position: 'absolute',
    backgroundColor: '#AED3FF',
    padding: 5,
    borderRadius: 18,
    right: -7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 36,
    color: '#353535',
    marginBottom: 8
  },
  profileStatus: {
    backgroundColor: '#AED3FF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 14
  },
  statusText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#255B99'
  },
  relative: {
    position: 'relative'
  },
  spacing: {
    marginLeft: 20
  }
});

export default styles;
