import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  list: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 22,
    marginVertical: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    borderRadius: 6,
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    backgroundColor: '#EAF3FF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'center',
    marginLeft: 15
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#343434'
  },
  subtitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#343434'
  },
  forward: {
    marginRight: 5
  },
  header: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    color: '#000'
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
    margin: 8
  },
  plusButton: {
    position: 'absolute',
    right: 10,
    top: 2,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginVertical: 12,
    marginHorizontal: 18
  }
});

export default styles;
