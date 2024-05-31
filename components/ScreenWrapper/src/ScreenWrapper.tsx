import React, { memo } from 'react';
import { TScreenWrapper } from './types';
import { View } from 'react-native';

export const ScreenWrapper = memo(({ children }: TScreenWrapper) => {
  return <View style={{ flex: 1 }}>{children}</View>;
});

ScreenWrapper.displayName = 'ScreenWrapper';
