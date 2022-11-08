import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import DetailScreen from '../screens/detail-screen';
import HomeScreen from '../screens/home-screen';
import LandingScreen from '../screens/landing-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="DetalScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
