/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from '@/screens/Home';
import BottomSheetScreen from '@/screens/BottomSheet';
import {Stack} from '@/navigators/Stacks';
import {theme} from '@/styles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer
          theme={{
            dark: isDarkMode,
            colors: {
              primary: 'rgb(0, 0, 0)',
              background: isDarkMode ? Colors.black : Colors.lighter,
              card: 'rgb(255, 255, 255)',
              text: 'rgb(28, 28, 30)',
              border: 'rgb(216, 216, 216)',
              notification: 'rgb(255, 59, 48)',
            },
          }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              navigationBarColor: isDarkMode ? Colors.black : Colors.lighter,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="BottomSheet"
              options={{
                presentation: 'formSheet',
                sheetAllowedDetents: 'all',
                sheetGrabberVisible: true,
              }}
              component={BottomSheetScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
