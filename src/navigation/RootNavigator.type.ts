import {NavigatorScreenParams} from '@react-navigation/native';
import {ProtectedTabParamList} from './protected/ProtectedNavigator.type';

export type RootStackParamList = {
  Authentication: undefined;
  Protected: NavigatorScreenParams<ProtectedTabParamList>;
};
