/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TestRealmProvider, useQuery} from './src/realm/contexts/test';
import Test from './src/realm/schemas/test';

const TestView = () => {
  const results = useQuery<Test>('Test');
  return (
    <View>
      {results.map(result => (
        <Text>{result.label}</Text>
      ))}
    </View>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TestRealmProvider>
        <TestView />
      </TestRealmProvider>
    </SafeAreaView>
  );
}

export default App;
