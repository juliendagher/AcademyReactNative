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
    label: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.title,
    },
  });

export {styles};
