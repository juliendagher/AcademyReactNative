import {View} from 'react-native';
import React from 'react';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './SettingsScreen.style';
import { useAuthStore } from '../../stores/authentication';

const SettingsScreen = () => {
  const logout = useAuthStore(state=>state.clearTokens);
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
