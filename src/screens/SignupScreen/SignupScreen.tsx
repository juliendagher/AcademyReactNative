import {View} from 'react-native';
import React, {useMemo} from 'react';
import {SignupForm} from '../../components/organisms/SignupForm';
import {useTheme} from '../../hooks/theme';
import {getStyles} from './SignupScreen.style';

const SignupScreen = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
};

export {SignupScreen};
