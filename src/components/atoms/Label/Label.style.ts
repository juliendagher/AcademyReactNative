import {StyleSheet} from 'react-native';
import { normalizeFontSize } from '../../../utils/scaling/scale';

const styles = (colors: {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  title: string;
  background: string;
}) =>
  StyleSheet.create({
    label: {
      fontSize: normalizeFontSize(20),
      fontFamily: 'Ubuntu-Bold',
      color: colors.title,
    },
  });

export {styles};
