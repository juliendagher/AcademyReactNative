import {Text, View} from 'react-native';
import React from 'react';
import {Products} from '../../components/organisms/Products';
import {useTheme} from '../../hooks/theme';

const MainScreen = () => {
  const {isDark} = useTheme();

  return (
    <View>
      <Text>Theme: {isDark ? 'dark' : 'light'}</Text>
      <Products />
    </View>
  );
};

export {MainScreen};
