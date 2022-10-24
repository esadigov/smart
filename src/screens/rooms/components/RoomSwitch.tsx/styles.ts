import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    width: '48%',
    paddingLeft: 12,
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
    borderColor: '#F3F3F3',
    borderWidth: 1,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 8,
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
    right: -55,
    bottom: -55,
    borderRadius: 1000,
    zIndex: -1,
  },
});

export default styles;
