import {KeyboardAvoidingView} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {SignupFormData, SignupNavigationProp, schema} from './SignupForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';
import {styles} from './SignupForm.style';
import {useMutation} from '@tanstack/react-query';
import {signup} from '../../../api/authentication';
import {Error} from '../../atoms/Error';

const SignupForm = () => {
  const navigation = useNavigation<SignupNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [signupError, setSignupError] = useState<string | undefined>(undefined);

  const {mutate, isPending} = useMutation({
    mutationFn: signup,
    onSuccess: (_, variables) => {
      setSignupError(undefined);
      reset();
      navigation.replace('OTP', {email: variables.email, password: variables.password});
    },
    onError: error => {
      setSignupError(error.message);
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profileImage: undefined,
    },
  });
  const onSubmit = (data: SignupFormData) => {
    mutate(data);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'First Name:'}
            placeholder="John"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.firstName?.message}
            value={value}
          />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Last Name:'}
            placeholder="Doe"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.lastName?.message}
            value={value}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'Email:'}
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
      <PressableWrapper disabled={isPending} label={'Signup'} onPress={handleSubmit(onSubmit)} />
      <Error errorMessage={signupError} />
      <PressableWrapper
        label={'Login instead?'}
        onPress={() => navigation.replace('Login')}
      />
    </KeyboardAvoidingView>
  );
};

export {SignupForm};
