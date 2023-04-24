import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    backgroundColor: '#1A569D',
    borderRadius: 6,
    width: 158,
    height: 115,
  },
  icon: {

  },
  status: {
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#FFF',
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