import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
export const ConfirmIcon = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <Path
      fill='#29A600'
      d='M10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9Zm3.852 7.452-4.5 4.5a.673.673 0 0 1-.954 0l-2.25-2.25a.675.675 0 1 1 .954-.954l1.773 1.773 4.022-4.023a.675.675 0 0 1 .955.954Z'
    />
  </Svg>
);
