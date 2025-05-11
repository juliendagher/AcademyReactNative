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
      borderRadius: 10,
      padding: 20,
      gap: 10,
      width: 180,
    },
    image: {
      width: '100%',
      aspectRatio: '1/1',
      borderRadius: 10,
    },
    text: {
      fontSize: 15,
      fontFamily: 'Ubuntu-Light',
      color: colors.text,
    },
  });

export {styles};
