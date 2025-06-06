import React, {useMemo} from 'react';
import {PressableWrapper} from '../../components/atoms/PressableWrapper';
import {useTheme} from '../../hooks/theme';
import {getStyles} from './SettingsScreen.style';
import {useAuthStore} from '../../stores/authentication';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const SettingsScreen = () => {
  const angle = useSharedValue(90);
  useFocusEffect(
    React.useCallback(() => {
      angle.value = withTiming(0, {duration: 200});
      return () => {
        angle.value = 90;
      };
    }, [angle]),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${angle.value}deg`}],
  }));

  const logout = useAuthStore(state => state.clearTokens);
  const {toggle, colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <PressableWrapper label="Log out" onPress={logout} />
      <PressableWrapper label="Toggle Theme" onPress={toggle} />
    </Animated.View>
  );
};

export {SettingsScreen};
