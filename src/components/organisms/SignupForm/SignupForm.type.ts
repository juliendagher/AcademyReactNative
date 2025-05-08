import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const schema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phoneNumber: z.string().regex(/^\d{8}$/, 'Phone number must be 8 characters'),
});

type SignupFormData = z.infer<typeof schema>;

type SignupNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export {schema};
export type {SignupFormData, SignupNavigationProp};
