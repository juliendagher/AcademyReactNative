import {NavigatorScreenParams} from '@react-navigation/native';

type ProtectedStackParamList = {
  Main: undefined;
  Details: {id: string};
  NewProduct: undefined;
};

type ProtectedTabParamList = {
  Home: NavigatorScreenParams<ProtectedStackParamList>;
  Cart: undefined;
  Settings: undefined;
};

export type {ProtectedStackParamList, ProtectedTabParamList};
