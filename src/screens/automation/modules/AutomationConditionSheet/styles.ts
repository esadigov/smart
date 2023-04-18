import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 30,
    color: '#000',
  },
  box: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#F9F9F9',
    borderRadius: 6,
    marginVertical: 4,
  },
  icon: {
    backgroundColor: '#C9EAFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 24,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },
});

export default styles;