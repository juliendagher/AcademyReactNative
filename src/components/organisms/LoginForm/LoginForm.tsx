import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {LoginFormData, LoginNavigationProp, schema} from './LoginForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';
import {Error} from '../../atoms/Error';

const LoginForm = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [loginError, setLoginError] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);

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
      setLoginError(undefined);
      reset();
      navigation.replace('OTP');
    } else {
      setLoginError('Invalid email or password');
    }
  };
  return (
    <View style={{gap: '2%'}}>
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
            secureTextEntry={!showPassword}
          />
        )}
        name="password"
      />
      <PressableWrapper
        label={showPassword ? 'Hide Password' : 'Show Password'}
        onPress={() => setShowPassword(prev => !prev)}
      />
      <Error errorMessage={loginError} />
      <PressableWrapper label={'Login'} onPress={handleSubmit(onSubmit)} />
      <PressableWrapper
        label={'Signup instead?'}
        onPress={() => navigation.replace('Signup')}
      />
    </View>
  );
};

export {LoginForm};
