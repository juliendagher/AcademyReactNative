import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigator from './authentication/AuthenticationNavigator';
import {ProtectedNavigator} from './protected/ProtectedNavigator';
import {useAuth} from '../hooks/authentication';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isLoggedIn} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="Protected" component={ProtectedNavigator} />
      ) : (
        <Stack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export {RootNavigator};
