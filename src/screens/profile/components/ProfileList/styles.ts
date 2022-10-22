import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginVertical: 18,
  },
  list: {
    flexDirection: 'row',
    padding: 6,
    marginHorizontal: 22,
    marginVertical: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    borderRadius: 6,
    backgroundColor: '#FFF',
  },
  icon: {
    backgroundColor: '#EAF3FF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  text: {
    justifyContent: 'center',
    left: 20,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#000',
  },
  forward: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
});

export default styles;
