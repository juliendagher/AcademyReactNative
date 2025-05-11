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
  button: {
    height: 44,
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Ubuntu-Bold',
    color: colors.tertiary,
    lineHeight: 44,
  },
});

export {styles};
