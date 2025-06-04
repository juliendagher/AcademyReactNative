import {View, TextInput} from 'react-native';
import React, {useMemo} from 'react';
import {TextInputWithErrorProps} from './TextInputWithError.type';
import {styles} from './TextInputWithError.style';
import {Error} from '../../atoms/Error';
import {Label} from '../../atoms/Label';
import {useTheme} from '../../../hooks/theme';

const TextInputWithError = ({
  style,
  label,
  value,
  onChangeText,
  onBlur,
  errorMessage,
  placeholder,
  secureTextEntry,
  maxLength,
}: TextInputWithErrorProps) => {
  const {colors} = useTheme();
  const themedStyles = useMemo(() => styles(colors), [colors]);
  return (
    <View style={[themedStyles.container, style]}>
      <Label title={label} />
      <TextInput
        style={themedStyles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
      <Error errorMessage={errorMessage} />
    </View>
  );
};

export {TextInputWithError};
