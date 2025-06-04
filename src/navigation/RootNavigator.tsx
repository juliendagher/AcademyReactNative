import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigator from './authentication/AuthenticationNavigator';
import {ProtectedNavigator} from './protected/ProtectedNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Linking, StatusBar} from 'react-native';
import {useAuthStore} from '../stores/authentication';
import linking from './linking';
import notifee, {AuthorizationStatus, EventType} from '@notifee/react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isAuth = useAuthStore(state => state.accessToken) !== null;

  useEffect(
    () =>
      notifee.onForegroundEvent(({type, detail}) => {
        if (type === EventType.PRESS) {
          const url = detail.notification?.data?.url;
          if (url) {
            Linking.openURL(url as string);
          }
        }
      }),
    [],
  );

  useEffect(() => {
    const settings = notifee.requestPermission();

    const createChannel = async () => {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
    };
    settings.then(result => {
      if (result.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
        createChannel();
      }
    });
  }, []);

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
