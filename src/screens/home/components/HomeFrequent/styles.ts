import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  box: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 6,
    marginBottom: 6,
    marginHorizontal: 14,
  },
  icon: {
    backgroundColor: '#EAF3FF',
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
    lineHeight: 19,
    color: '#343434',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#343434',
  },
  frequentHeader: {
    marginHorizontal: 14,
    marginVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  frequentText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#343434',
  },
  seeAllButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 71,
    height: 31,
    backgroundColor: '#F5FAFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  seeAllText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#1A5EAF',
  },
  main: {
    flex: 4,
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