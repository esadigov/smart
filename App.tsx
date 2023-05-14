// Primary Imports
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Navigation } from './src/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// Redux Imports
import { Provider } from 'react-redux';
import { store } from './src/store';
// Primary Render
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;