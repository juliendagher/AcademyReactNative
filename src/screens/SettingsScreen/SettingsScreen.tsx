import {View} from 'react-native';
import React from 'react';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {useAuth} from '../../hooks/authentication';
import {useTheme} from '../../hooks/theme';

const SettingsScreen = () => {
  const {logout} = useAuth();
  const {toggle} = useTheme();
  return (
    <View>
      <PressableWrapper label="Log out" onPress={logout} />
      <PressableWrapper label="Toggle Theme" onPress={toggle} />
    </View>
  );
};

export {SettingsScreen};
