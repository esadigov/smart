import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    padding: 10,
    paddingTop: 20,
    color: '#000',
  },
  spacing: {
    paddingHorizontal: 4,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 8,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
  },
  line: {
    backgroundColor: '#F0F0F0',
    width: 350,
    left: 20,
    height: 2,
    marginTop: -20,
  },
});

export default styles;
