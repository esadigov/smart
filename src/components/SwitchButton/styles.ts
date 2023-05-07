import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 6,
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
  titleContainer: {
    maxWidth: '75%',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    color: '#343434',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  enabledText: {
    color: '#fff',
  },
  subtitle: {
    color: '#343434',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
    lineHeight: 17,
  },
  switchContainer: {
    marginRight: 24,
    borderRadius: 24,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#F2F2F2',
  },
  switch: {
    width: 46,
    marginBottom: 2,
    marginHorizontal: 3.5,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

export default styles;
