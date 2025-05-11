import {StyleSheet} from 'react-native';
import { scale, verticalScale } from '../../../utils/scaling/scale';

const styles = StyleSheet.create({
  productContainer: {
    gap: scale(5),
    padding: scale(10),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
});

export {styles};
