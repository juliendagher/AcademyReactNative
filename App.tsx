import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/RootNavigator';
import {AuthProvider} from './src/hooks/authentication';
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
