// Primary Imports
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Navigation } from './src/navigation';
import { store } from './src/store';

const queryClient = new QueryClient();
// Primary Render
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
