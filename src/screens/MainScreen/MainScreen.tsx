import {View} from 'react-native';
import React from 'react';
import {Products} from '../../components/organisms/Products';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './MainScreen.style';

const MainScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
};

export {MainScreen};
