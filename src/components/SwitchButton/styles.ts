import {StyleSheet} from 'react-native';

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
  subtitle: {
    color: '#343434',
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
    lineHeight: 17,
  },
});

export default styles;
