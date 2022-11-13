import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
    color: '#000',
  },
  spacing: {
    paddingHorizontal: 4,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  box: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 6,
    marginVertical: 4,
  },
  upper: {
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  primaryText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#353535',
  },
  dropdownKey: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  subText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 15,
    top: 8,
    fontSize: 12,
    color: '#A5A5A5',
  },
  lower: {
    paddingVertical: 22,
    alignItems: 'center',
  },
  button: {
    width: 320,
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#3A6598',
    backgroundColor: '#3A6598',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFF',
  },
});

export default styles;
