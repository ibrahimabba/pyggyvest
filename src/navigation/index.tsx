/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import RootStackNavigator from './RootStackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    //theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStackNavigator />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'light'} />
    </NavigationContainer>
  );
}
