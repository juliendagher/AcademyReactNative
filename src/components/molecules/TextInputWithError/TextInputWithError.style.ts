import {StyleSheet} from 'react-native';
import { scale, verticalScale } from '../../../utils/scaling/scale';

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
      gap: scale(5),
    },
    input: {
      fontFamily: 'Ubuntu-Regular',
      height: verticalScale(44),
      borderWidth: scale(1),
      borderColor: colors.tertiary,
      borderRadius: scale(5),
      color: colors.text,
    },
  });

export {styles};
