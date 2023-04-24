import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    color: '#353535',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  notification: {
    position: 'absolute',
    backgroundColor: '#D7293E',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 38,
    right: 4,
  },
  notificationText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12
  },
  subtitle: {
    color: '#CACACA',
    fontSize: 14,
    fontWeight: '600',
  },
  plusButton: {
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 15,
  },
});

export default styles;