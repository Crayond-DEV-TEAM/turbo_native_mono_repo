import React from 'react';
// React Native Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// types
import { HomeStackParamList } from './types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackRoutes = (): React.JSX.Element => {
  return <HomeStack.Navigator initialRouteName={'Home'}></HomeStack.Navigator>;
};
