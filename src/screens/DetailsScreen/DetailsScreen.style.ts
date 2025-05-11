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
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10%',
      height: '100%',
    },
    image: {
      width: '100%',
      aspectRatio: '3/4',
      borderRadius: 10,
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
