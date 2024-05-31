import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const WhiteVector = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={18} height={13} fill='none' {...props}>
    <Path fill='#fff' fillOpacity={0.5} d='M17.5 0C16.018 5.263 12.963 12.5 0 12.5c9.63-2.456 12-6 17.5-12.5Z' />
  </Svg>
);
