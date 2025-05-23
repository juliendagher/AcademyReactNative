import React from 'react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {ThemeProvider} from './src/hooks/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useAuthStore} from './src/stores/authentication';
import {LoadingScreen} from './src/screens/LoadingScreen/LoadingScreen';

const App = () => {
  const isHydrated = useAuthStore(state => state.isHydrated);
  const queryClient = new QueryClient();

  if (!isHydrated) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
