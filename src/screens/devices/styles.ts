import {StyleSheet} from 'react-native';

export const PADDING = 16;
export const FONT_SIZE = 15;
export const FONT_SIZE_SM = 11;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
  },
  plusButton: {
    position: 'absolute',
    right: 15,
    top: 2,

    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  spacing: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default styles;
