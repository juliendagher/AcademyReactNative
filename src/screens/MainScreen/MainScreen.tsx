import {View} from 'react-native';
import React, { useMemo } from 'react';
import {Products} from '../../components/organisms/Products';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './MainScreen.style';

const MainScreen = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
};

export {MainScreen};
