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
  inputText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#353535',
  },
  input: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    top: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 6,
    color: '#353535'
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  saveText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 19,
    color: '#FFF',
  },
});

export default styles;