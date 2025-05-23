import {StyleSheet} from 'react-native';
import { normalizeFontSize, scale, verticalScale } from '../../utils/scaling/scale';

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
      padding: scale(20),
      gap: verticalScale(10),
    },
    imageContainer: {
      width: scale(375),
      aspectRatio: '1/1',
      height: 'auto',
    },
    image: {
      width: scale(375),
      aspectRatio: '1/1',
      height: 'auto',
      borderRadius: scale(30),
      marginBottom: verticalScale(10),
    },
    text: {
      fontSize: normalizeFontSize(15),
      fontFamily: 'Ubuntu-Light',
      color: colors.text,
    },
    description: {
      fontSize: normalizeFontSize(15),
      fontFamily: 'Ubuntu-Regular',
      color: colors.text,
    },
  });

export {styles};
