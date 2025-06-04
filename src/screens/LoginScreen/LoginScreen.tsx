import {View} from 'react-native';
import React, {useMemo} from 'react';
import {LoginForm} from '../../components/organisms/LoginForm';
import {useTheme} from '../../hooks/theme';
import {getStyles} from './LoginScreen.style';

const LoginScreen = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export {LoginScreen};
