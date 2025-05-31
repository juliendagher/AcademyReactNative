import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigator from './authentication/AuthenticationNavigator';
import {ProtectedNavigator} from './protected/ProtectedNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useAuthStore} from '../stores/authentication';
import linking from './linking';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isAuth = useAuthStore(state => state.accessToken) !== null;

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAuth ? (
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
