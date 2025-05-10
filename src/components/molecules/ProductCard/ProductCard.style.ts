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
      backgroundColor: colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      gap: 10,
      width: 180,
    },
    image: {
      width: 110,
      height: 110,
      borderRadius: 10,
    },
  });

export {styles};
