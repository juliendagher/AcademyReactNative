import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(1, 'Password cannot be empty'),
});

type LoginFormData = z.infer<typeof schema>;

type LoginNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export {schema};
export type {LoginFormData, LoginNavigationProp};
