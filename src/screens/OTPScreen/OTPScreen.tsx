import {View} from 'react-native';
import React from 'react';
import {OTPForm} from '../../components/organisms/OTPForm';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './OTPScreen.style';

const OTPScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);
  return (
    <View
      style={styles.container}>
      <OTPForm />
    </View>
  );
};

export {OTPScreen};
