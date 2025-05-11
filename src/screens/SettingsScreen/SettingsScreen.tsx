import {View} from 'react-native';
import React from 'react';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {useAuth} from '../../hooks/authentication';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './SettingsScreen.style';

const SettingsScreen = () => {
  const {logout} = useAuth();
  const {toggle, colors} = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <PressableWrapper label="Log out" onPress={logout} />
      <PressableWrapper label="Toggle Theme" onPress={toggle} />
    </View>
  );
};

export {SettingsScreen};
