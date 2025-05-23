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
    productContainer: {
      gap: scale(5),
      padding: scale(10),
    },
    columnWrapper: {
      justifyContent: 'space-between',
      marginBottom: verticalScale(5),
    },
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
      gap: scale(5),
      padding: scale(10),
    },
    input: {
      flex: 4,
      fontFamily: 'Ubuntu-Regular',
      height: verticalScale(44),
      borderWidth: scale(1),
      borderColor: colors.tertiary,
      borderRadius: scale(5),
      color: colors.text,
    },
    sort: {
      flex: 2,
    },
  });

export {styles};
