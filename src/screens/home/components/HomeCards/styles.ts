import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#1A569D',
    borderRadius: 6,
    width: 158,
    height: 115,
    marginHorizontal: 4.5,
  },
  listContainer: {
    paddingHorizontal: 11,
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 16,
    zIndex: 1,
  },
  status: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 16,
    right: 12,
    width: 51,
    height: 24,
    borderRadius: 4,
    zIndex: 1,
  },
  statusText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    color: '#FFF',
  },
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 14,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginBottom: 2.5,
  },
  lifetime: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#FFF',
  },
});

export default styles;