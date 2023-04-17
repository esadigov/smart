import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 32,
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 25,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#000',
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
  plusButton: {
    position: 'absolute',
    right: 0,
    top: 2,
    backgroundColor: '#F5FAFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginVertical: 12,
    marginHorizontal: 18,
  },
  spacing: {
    marginVertical: 44,
    marginHorizontal: 10,
  },
  robotImage: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createAutomation: {
    backgroundColor: '#3A6598',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    margin: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3A6598',
  },
  createAutomationText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFF',
  },
})

export default styles;
