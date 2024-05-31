import React from 'react';
// React Native Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// types
import { HomeStackParamList } from './types';

import { WelcomeScreen } from './screens/welcome';
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackRoutes = (): React.JSX.Element => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <HomeStack.Screen name={'Home'} component={WelcomeScreen} />
    </HomeStack.Navigator>
  );
};
