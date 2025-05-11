import {StyleSheet} from 'react-native';
import { normalizeFontSize, scale, verticalScale } from '../../../utils/scaling/scale';

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
      borderRadius: scale(10),
      padding: scale(10),
      gap: verticalScale(10),
      width: '48%',
    },
    image: {
      width: '100%',
      aspectRatio: '1/1',
      borderRadius: scale(10),
    },
    text: {
      fontSize: normalizeFontSize(15),
      fontFamily: 'Ubuntu-Light',
      color: colors.text,
    },
  });

export {styles};
