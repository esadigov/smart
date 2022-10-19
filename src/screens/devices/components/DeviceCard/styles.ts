import {StyleSheet} from 'react-native';

export const PADDING = 16;
export const FONT_SIZE = 15;
export const FONT_SIZE_SM = 11;

const styles = StyleSheet.create({
  container: {
    width: '47%',
    paddingVertical: 55,
    backgroundColor: 'grey',
    marginVertical: 6,
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
