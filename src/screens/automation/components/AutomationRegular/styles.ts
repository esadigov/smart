import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 6,
    marginVertical: 4,
    marginHorizontal: 10
  },
  condition: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#AAA'
  },
  icon: {
    backgroundColor: '#EAF3FF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 24
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: '#000'
  },
  main: {
    flex: 4
  },
  switchContainer: {
    flex: 1,
    marginRight: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F2F2F2'
  },
  switch: {
    marginBottom: 2,
    marginHorizontal: 3.5,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  }
});

export default styles;
