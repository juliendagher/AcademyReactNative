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
      backgroundColor: colors.background,
      height: '100%',
      gap: '2%',
    },
    detailsWrapper: {
      padding: 20,
      gap: 10,
    },
    image: {
      width: '100%',
      aspectRatio: '1/1',
      height: 'auto',
      borderRadius: 30,
      marginBottom: 10,
    },
    text: {
      fontSize: 15,
      fontFamily: 'Ubuntu-Light',
      color: colors.text,
    },
    description: {
      fontSize: 15,
      fontFamily: 'Ubuntu-Regular',
      color: colors.text,
    },
  });

export {styles};
