import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {TextInputWithErrorProps} from './TextInputWithError.type';
import {styles} from './TextInputWithError.style';

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
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={'#888'}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export {TextInputWithError};
