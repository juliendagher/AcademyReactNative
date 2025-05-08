import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {OTPFormData, OTPNavigationProp, schema} from './OTPForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';
import {Error} from '../../atoms/Error';

const OTPForm = () => {
  const navigation = useNavigation<OTPNavigationProp>();
  const [OTPError, setOTPError] = useState<string | undefined>();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<OTPFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: '',
    },
  });
  const onSubmit = (data: OTPFormData) => {
    if (data.otp === '1234') {
      setOTPError(undefined);
      reset();
    } else {
      setOTPError('Invalid OTP');
    }
  };
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'One Time Passcode'}
            placeholder="XXXX"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.otp?.message}
            value={value}
            maxLength={4}
          />
        )}
        name="otp"
      />
      <Error errorMessage={OTPError} />
      <PressableWrapper label={'Proceed'} onPress={handleSubmit(onSubmit)} />
      <PressableWrapper
        label={'Login with other credentials?'}
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
};

export {OTPForm};
