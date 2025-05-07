import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React from 'react';
import {LoginFormData, schema} from './LoginForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';

const LoginForm = () => {
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
    console.log(data);
    reset();
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
    </View>
  );
};

export {LoginForm};
