import {View, TextInput} from 'react-native';
import React from 'react';
import {TextInputWithErrorProps} from './TextInputWithError.type';
import {styles} from './TextInputWithError.style';
import {Error} from '../../atoms/Error';
import {Label} from '../../atoms/Label';

const TextInputWithError = ({
  style,
  label,
  value,
  onChangeText,
  onBlur,
  errorMessage,
  placeholder,
  secureTextEntry,
}: TextInputWithErrorProps) => {
  return (
    <View style={[styles.container, style]}>
      <Label title={label} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        secureTextEntry={secureTextEntry}
      />
      <Error errorMessage={errorMessage} />
    </View>
  );
};

export {TextInputWithError};
