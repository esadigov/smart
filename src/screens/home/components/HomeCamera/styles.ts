import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingBottom: 10
  },
  cardContainer: {
    backgroundColor: '#00000080',
    borderRadius: 6,
    width: 256,
    height: 155,
    marginHorizontal: 3,
    overflow: 'hidden'
  },
  listContainer: {
    paddingHorizontal: 11
  },
  cameraHeader: {
    marginHorizontal: 14,
    marginVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cameraText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#343434'
  },
  seeAllButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 71,
    height: 31,
    backgroundColor: '#F5FAFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  seeAllText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#1A5EAF'
  },
  backgroundImg: {
    width: 256,
    height: 155
  },
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#979797',
    bottom: 9,
    left: 9,
    width: 80,
    height: 28,
    borderRadius: 6
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 6,
    color: '#FFF'
  }
});

export default styles;
