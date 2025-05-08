import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationNavigator from './authentication/AuthenticationNavigator';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const isLoggedIn = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {isLoggedIn ? (
        <Stack.Screen name="Protected" component={ProtectedNavigator} />
      ) : ( */}

      <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
      {/* )} */}
    </Stack.Navigator>
  );
};

export {RootNavigator};
