import {StyleProp, ViewStyle} from 'react-native';

type TextInputWithErrorProps = {
  style?: StyleProp<ViewStyle>;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export type {TextInputWithErrorProps};
