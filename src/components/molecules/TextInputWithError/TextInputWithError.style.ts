import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    color: 'black',
  },
  errorMessage: {
    color: 'red',
  },
});

export {styles};
