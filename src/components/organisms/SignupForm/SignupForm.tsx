import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {SignupFormData, SignupNavigationProp, schema} from './SignupForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';

const SignupForm = () => {
  const navigation = useNavigation<SignupNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
  });
  const onSubmit = (data: SignupFormData) => {
    console.log(data);
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
            label={'Name'}
            placeholder="John Doe"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.name?.message}
            value={value}
          />
        )}
        name="name"
      />
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
            label={'Phone Number'}
            placeholder="XXXXXXXX"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.phoneNumber?.message}
            value={value}
          />
        )}
        name="phoneNumber"
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
      <PressableWrapper label={'Signup'} onPress={handleSubmit(onSubmit)} />
      <PressableWrapper
        label={'Login instead?'}
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
};

export {SignupForm};
