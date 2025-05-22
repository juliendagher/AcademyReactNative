import {View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {
  OTPFormData,
  OTPNavigationProp,
  OTPRouteProp,
  schema,
} from './OTPForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {TextInputWithError} from '../../molecules/TextInputWithError';
import {PressableWrapper} from '../../atoms/PressableWrapper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Error} from '../../atoms/Error';
// import {useAuth} from '../../../hooks/authentication';
import {styles} from './OTPForm.style';
import {useMutation} from '@tanstack/react-query';
import {otp, login} from '../../../api/authentication';
import { useAuthStore } from '../../../stores/authentication';
// import {reOtp} from '../../../api/authentication/authentication';

const OTPForm = () => {
  const navigation = useNavigation<OTPNavigationProp>();
  const {params} = useRoute<OTPRouteProp>();
  // set up timeout kmn useeffect??
  // const [canAskForNewOtp, setCanAskForNewOtp] = useState(false);
  // const {login} = useAuth();
  const [OTPError, setOTPError] = useState<string | undefined>();
  const setTokens = useAuthStore(state=>state.setTokens);

  const {mutate: verify, isPending: verifying} = useMutation({
    mutationFn: otp,
    onSuccess: () => {
      setOTPError(undefined);
      reset();
      verifyCreds({email: params.email, password: params.password, expiresIn: '1y'});
    },
    onError: error => setOTPError(error.message),
  });

  const {mutate: verifyCreds, isPending: loggingIn} = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setOTPError(undefined);
      reset();
      setTokens(response.data.accessToken, response.data.refreshToken, '1y');
    },
    onError: error => setOTPError(error.message),
  });

  // const {mutate: resend, isPending: resending} = useMutation({
  //   mutationFn: reOtp,
  //   onSuccess: () => {
  //     setOTPError(undefined);
  //     reset();
  //   },
  //   onError: error => setOTPError(error.message),
  // });

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
    verify({email: params.email, otp: data.otp});
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputWithError
            label={'One Time Passcode'}
            placeholder="XXXXXX"
            onBlur={onBlur}
            onChangeText={onChange}
            errorMessage={errors.otp?.message}
            value={value}
            maxLength={6}
          />
        )}
        name="otp"
      />
      <Error errorMessage={OTPError} />
      <PressableWrapper
        disabled={verifying || loggingIn}
        label={'Proceed'}
        onPress={handleSubmit(onSubmit)}
      />
      {/* <View> */}
        <PressableWrapper
          label={'Signup with other credentials?'}
          onPress={() => navigation.replace('Signup')}
        />
        {/* <PressableWrapper
          disabled={canAskForNewOtp ? resending : false}
          label={resending ? 'Sending' : 'Resend'}
          onPress={() => resend({email: params.email})}
        /> */}
      {/* </View> */}
    </View>
  );
};

export {OTPForm};
