// React Native Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// home routes type
export type HomeStackParamList = {
};

// navigation, route type
export type NavigationRouteType<T extends keyof HomeStackParamList> = NativeStackScreenProps<HomeStackParamList, T>;
