import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigator from './authentication/AuthenticationNavigator';
import {ProtectedNavigator} from './protected/ProtectedNavigator';
import {useAuth} from '../hooks/authentication';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isLoggedIn} = useAuth();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
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
      </NavigationContainer>
    </>
  );
};

export {RootNavigator};
