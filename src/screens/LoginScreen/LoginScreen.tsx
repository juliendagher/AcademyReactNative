import {View} from 'react-native';
import React from 'react';
import {LoginForm} from '../../components/organisms/LoginForm';
import { useTheme } from '../../hooks/theme';

const LoginScreen = () => {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors.background, height: '100%', padding: '10%', justifyContent: 'center'}}>
      <LoginForm />
    </View>
  );
};

export {LoginScreen};
