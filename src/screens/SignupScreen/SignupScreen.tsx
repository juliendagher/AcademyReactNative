import {View} from 'react-native';
import React from 'react';
import {SignupForm} from '../../components/organisms/SignupForm';
import {useTheme} from '../../hooks/theme';

const SignupScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.background, height: '100%', padding: '10%', justifyContent: 'center'}}>
      <SignupForm />
    </View>
  );
};

export {SignupScreen};
