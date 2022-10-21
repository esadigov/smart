import { StyleSheet } from 'react-native';

export const PADDING = 16;
export const FONT_SIZE = 15;
export const FONT_SIZE_SM = 11;

const styles = StyleSheet.create({
  container: {
    width: '47%',
    borderRadius: 6,
    marginVertical: 6,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 55,
    lineHeight: 24,
    backgroundColor: '#00000080',
  },
  backgroundImg: {
    borderRadius: 6,
  },
});

export default styles;
