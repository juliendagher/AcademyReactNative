import {StyleSheet} from 'react-native';

const styles = (colors: {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  title: string;
  background: string;
}) =>
  StyleSheet.create({
    container: {
      gap: 5,
    },
    input: {
      height: 44,
      borderWidth: 1,
      borderColor: colors.tertiary,
      borderRadius: 5,
      color: colors.text,
    },
  });

export {styles};
