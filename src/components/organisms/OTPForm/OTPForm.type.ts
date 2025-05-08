import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const schema = z.object({
  otp: z.string().regex(/^\d{4}$/, 'One time passcode has 4 digits'),
});

type OTPFormData = z.infer<typeof schema>;

type OTPNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

export {schema};
export type {OTPFormData, OTPNavigationProp};
