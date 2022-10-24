import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginVertical: 18,
    flex: 1,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: '#EAF3FF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    justifyContent: 'center',
    marginLeft: 15,
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
    marginRight: 5,
  },
});

export default styles;
