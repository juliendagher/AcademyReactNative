import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens/LoginScreen';
import {SignupScreen} from '../../screens/SignupScreen';
import {OTPScreen} from '../../screens/OTPScreen';
import { AuthStackParamList } from './AuthenticationNavigator.type';

const AuthenticationNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
