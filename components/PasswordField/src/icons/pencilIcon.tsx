import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
export const PencilIcon = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={14} height={20} fill='none' {...props}>
    <G stroke='#151515' strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.35}>
      <Path d='M1.6 19v-7.475c0-1.409 0-2.114.194-2.778.192-.665.567-1.25 1.318-2.423l2.39-3.736C6.18 1.528 6.52 1 7 1c.482 0 .82.53 1.498 1.588l2.39 3.736c.75 1.172 1.125 1.758 1.319 2.423.193.664.193 1.368.193 2.778V19' />
      <Path d='M2.5 9.1c.569.29 1.34.876 2.052.9.917.029 1.536-.777 2.448-.777.912 0 1.53.806 2.448.776.712-.023 1.484-.608 2.052-.899M7 10v9M5.2 3.7h3.6' />
    </G>
  </Svg>
);
