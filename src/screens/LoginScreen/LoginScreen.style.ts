import {StyleSheet} from 'react-native';

export const getStyles = (colors: {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  title: string;
  background: string;
}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      height: '100%',
      padding: '10%',
      justifyContent: 'center',
    },
  });
