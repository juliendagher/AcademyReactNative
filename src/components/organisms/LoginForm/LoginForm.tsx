import {Alert, KeyboardAvoidingView} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {LoginFormData, LoginNavigationProp, schema} from './LoginForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation} from '@react-navigation/native';
import {Error} from '../../atoms/Error';
import {styles} from './LoginForm.style';
import {useMutation} from '@tanstack/react-query';
import {login} from '../../../api/authentication';
import {useAuthStore} from '../../../stores/authentication';

const LoginForm = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [loginError, setLoginError] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);

  const {setTokens} = useAuthStore();

  const {mutate, isPending} = useMutation({
    mutationFn: login,
    onSuccess: data => {
      setLoginError(undefined);
      reset();
      setTokens(data.data.accessToken, data.data.refreshToken, '1y');
    },
    onError: error => Alert.alert(error.message),
  });

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
    mutate({email: data.email, password: data.password, expiresIn: '1y'});
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
      <PressableWrapper
        disabled={isPending}
        label={'Login'}
        onPress={handleSubmit(onSubmit)}
      />
      <PressableWrapper
        label={'Signup instead?'}
        onPress={() => navigation.replace('Signup')}
      />
    </KeyboardAvoidingView>
  );
};

export {LoginForm};
