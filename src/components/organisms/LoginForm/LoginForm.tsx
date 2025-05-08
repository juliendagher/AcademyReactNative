import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React from 'react';
import {LoginFormData, LoginNavigationProp, schema} from './LoginForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: LoginFormData) => {
    if (
      data.email === 'academy@eurisko.net' &&
      data.password === 'academy2025'
    ) {
      navigation.navigate('OTP');
      reset();
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
            label={'Email'}
            placeholder="x@x.x"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Password'}
            placeholder="********"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            value={value}
          />
        )}
        name="password"
      />
      <PressableWrapper label={'Login'} onPress={handleSubmit(onSubmit)} />
      <PressableWrapper
        label={'Signup instead?'}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export {LoginForm};
