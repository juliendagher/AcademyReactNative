import {View} from 'react-native';
import React, { useMemo } from 'react';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './NewProductScreen.style';
import { NewProduct } from '../../components/organisms/NewProduct/NewProduct';

const NewProductScreen = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  return (
    <View
      style={styles.container}>
      <NewProduct />
    </View>
  );
};

export {NewProductScreen};
