import {View} from 'react-native';
import React from 'react';
import {LoginForm} from '../../components/organisms/LoginForm';
import {useTheme} from '../../hooks/theme';
import {getStyles} from './LoginScreen.style';

const LoginScreen = () => {
  const {colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export {LoginScreen};
