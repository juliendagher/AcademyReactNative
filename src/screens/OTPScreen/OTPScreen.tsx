import {View} from 'react-native';
import React from 'react';
import { OTPForm } from '../../components/organisms/OTPForm';
import { useTheme } from '../../hooks/theme';

const OTPScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.background, height: '100%'}}>
      <OTPForm/>
    </View>
  );
};

export {OTPScreen};
