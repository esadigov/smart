import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingLeft: 12,
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
    borderColor: '#F3F3F3',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  titleText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 4,
  },
  textEnabled: {
    color: '#fff',
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 30,
  },
  circle: {
    position: 'absolute',
    left: -60,
    borderRadius: 1000,
    zIndex: -1,
  },
});

export default styles;
