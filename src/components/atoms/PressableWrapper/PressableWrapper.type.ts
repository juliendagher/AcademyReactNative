import {StyleProp, ViewStyle} from 'react-native';

type PressableWrapperProps = {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  //disabled?: boolean;
};

export type {PressableWrapperProps};
