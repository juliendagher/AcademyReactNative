import React from 'react';
import {CartItems} from '../../components/organisms/CartItems/CartItems';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const CartItemsScreen = () => {
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
  return (
    <Animated.View style={[{padding: '10%'}, animatedStyle]}>
      <SafeAreaView>
        <CartItems />
      </SafeAreaView>
    </Animated.View>
  );
};

export {CartItemsScreen};
