import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../utils/scaling/scale';

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
      height: verticalScale(44),
      backgroundColor: colors.primary,
      alignItems: 'center',
      borderRadius: scale(5),
    },
    pressed: {
      backgroundColor: colors.secondary,
    },
    buttonText: {
      fontSize: scale(15),
      fontFamily: 'Ubuntu-Bold',
      color: colors.tertiary,
      lineHeight: verticalScale(44),
    },
  });

export {styles};
