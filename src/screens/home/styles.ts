import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 10,
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
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
