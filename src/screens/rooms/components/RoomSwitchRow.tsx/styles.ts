import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
    borderColor: '#F3F3F3',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 6,
    height: 115
  },
  titleText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 4
  },
  textEnabled: {
    color: '#fff'
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17
  },
  circle: {
    position: 'absolute',
    left: -60,
    borderRadius: 1000,
    zIndex: -1
  },
  switchContainer: {
    width: 54,
    marginRight: 20,
    borderRadius: 24,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#F2F2F2'
  },
  switch: {
    width: 46,
    marginBottom: 2,
    marginHorizontal: 3.5,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
  images: {
    position: 'absolute',
    left: 0,
    transform: [{ scaleX: -1 }]
  },
  users: {
    width: 32,
    height: 32,
    marginTop: 10
  }
});

export default styles;
