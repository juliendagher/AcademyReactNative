import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './PressableWrapper.style';
import {PressableWrapperProps} from './PressableWrapper.type';
import {useTheme} from '../../../hooks/theme';

const PressableWrapper = ({label, onPress, style, disabled}: PressableWrapperProps) => {
  const {colors} = useTheme();
  const themedStyles = styles(colors);
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        themedStyles.button,
        pressed ? themedStyles.pressed : {},
        style,
      ]}
      onPress={onPress}>
      <Text style={themedStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export {PressableWrapper};
