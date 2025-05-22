import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const schema = z.object({
  firstName: z.string().min(1, 'Name cannot be empty'),
  lastName: z.string().min(1, 'Name cannot be empty'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  profileImage: z.string().optional(),
});

type SignupFormData = z.infer<typeof schema>;

type SignupNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export {schema};
export type {SignupFormData, SignupNavigationProp};
