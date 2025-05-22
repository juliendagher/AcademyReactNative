import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

const schema = z.object({
  otp: z.string().regex(/^\d{6}$/, 'One time passcode has 6 digits'),
});

type OTPFormData = z.infer<typeof schema>;

type OTPNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

type OTPRouteProp = RouteProp<AuthStackParamList, 'OTP'>

export {schema};
export type {OTPFormData, OTPNavigationProp, OTPRouteProp};
