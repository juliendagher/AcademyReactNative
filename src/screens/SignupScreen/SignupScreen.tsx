import {View} from 'react-native';
import React from 'react';
import {SignupForm} from '../../components/organisms/SignupForm';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './SignupScreen.style';

const SignupScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
};

export {SignupScreen};
