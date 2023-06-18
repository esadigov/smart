import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    width: '45%',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    borderColor: '#F3F3F3',
    borderWidth: 1,
    marginVertical: 5.5,
    marginHorizontal: 9.5,
    maxWidth: '45%'
  },
  titleText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 8
  },
  textEnabled: {
    color: '#fff'
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 30
  },
  circle: {
    position: 'absolute',
    right: -55,
    bottom: -55,
    borderRadius: 1000,
    zIndex: -1
  },
  switchContainer: {
    width: 54,
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
    bottom: 0,
    right: 0
  }
});

export default styles;
