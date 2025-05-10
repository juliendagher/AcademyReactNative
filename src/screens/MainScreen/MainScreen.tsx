import {View} from 'react-native';
import React from 'react';
import {Products} from '../../components/organisms/Products';
import {useTheme} from '../../hooks/theme';

const MainScreen = () => {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors.background, height: '100%'}}>
      <Products />
    </View>
  );
};

export {MainScreen};
