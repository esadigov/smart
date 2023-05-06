import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  header: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
    paddingTop: 20,
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 8,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
  },
  personalContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  personal: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: '#353535',
  },
  subTextContainer: {
    paddingTop: 10,
    paddingHorizontal: 24,
  },
  subText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 19,
    color: '#8E8E8E',
  },
  inputContainer: {
    paddingTop: 44,
    paddingHorizontal: 24,
  },
  inputText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    color: '#353535',
  },
  input: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    top: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#EEE',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 6,
    color: '#353535'
  },
  wrongInput: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    top: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFEAEA',
    borderColor: '#DE2C2C',
    borderWidth: 1,
    borderRadius: 6,
    color: '#353535'
  },
  error: {
    color: '#DE2C2C',
    top: 16,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
  },
});

export default styles;
