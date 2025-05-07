import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './PressableWrapper.style';
import {PressableWrapperProps} from './PressableWrapper.type';

const PressableWrapper = ({label, onPress, style}: PressableWrapperProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        pressed ? styles.pressed : {},
        style,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export {PressableWrapper};
