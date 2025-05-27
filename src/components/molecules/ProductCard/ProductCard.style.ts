import {StyleSheet} from 'react-native';
import {
  normalizeFontSize,
  scale,
  verticalScale,
} from '../../../utils/scaling/scale';

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

const skeletonStyles = {
  container: {
    width: scale(172),
    borderRadius: scale(10),
    padding: scale(10),
    marginBottom: verticalScale(12),
  },
  image: {
    width: scale(152),
    height: scale(152),
    borderRadius: scale(10),
  },
  title: {
    width: scale(100),
    height: verticalScale(14),
    borderRadius: scale(4),
    marginTop: verticalScale(10),
  },
  price: {
    width: scale(60),
    height: verticalScale(14),
    borderRadius: scale(4),
    marginTop: verticalScale(6),
  },
};

export {styles, skeletonStyles};
