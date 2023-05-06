import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingBottom: 30,
    marginTop: -8,
  },
  flexSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Inter',
    color: '#353535',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 4,
    marginLeft: 2,
  },
  notification: {
    position: 'absolute',
    backgroundColor: '#D7293E',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 38,
    right: 9,
  },
  notificationText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  subtitle: {
    fontFamily: 'Inter',
    color: '#CACACA',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 2,
  },
  plusButton: {
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: 18,
    marginTop: 3,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 15,
  },
});

export default styles;