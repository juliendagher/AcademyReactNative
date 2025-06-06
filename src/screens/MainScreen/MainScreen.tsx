import React, { useMemo } from 'react';
import {Products} from '../../components/organisms/Products';
import {useTheme} from '../../hooks/theme';
import { getStyles } from './MainScreen.style';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const MainScreen = () => {
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
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Products />
    </Animated.View>
  );
};

export {MainScreen};
