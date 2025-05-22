import React from 'react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {ThemeProvider} from './src/hooks/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
          <RootNavigator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
