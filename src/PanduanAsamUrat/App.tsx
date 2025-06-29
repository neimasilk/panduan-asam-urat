/**
 * Panduan Asam Urat App
 * Mobile application for gout management
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  // Mock navigation props for now
  const mockNavigation = {
    navigate: (screen: string) => {
      console.log(`Navigate to: ${screen}`);
    },
  };

  const mockRoute = {
    params: {},
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <HomeScreen navigation={mockNavigation} route={mockRoute} />
    </>
  );
}

export default App;
