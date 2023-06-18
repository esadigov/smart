import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 6,
    marginVertical: 4
  },
  upper: {
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  primaryText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#353535'
  },
  dropdownKey: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  subText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 15,
    top: 8,
    fontSize: 12,
    color: '#A5A5A5'
  },
  lower: {
    flexDirection: 'column',
    paddingBottom: 22,
    paddingTop: 4,
    alignItems: 'flex-start',
    marginHorizontal: 24
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    width: 320,
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#3A6598',
    backgroundColor: '#3A6598',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFF'
  },
  actionsContainer: {
    paddingTop: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 24
  },
  actions: {
    flexDirection: 'row',
    backgroundColor: '#FFEAEA',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 6,
    marginTop: 12
  },
  actionsText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: '#000',
    marginLeft: 10
  }
});

export default styles;
