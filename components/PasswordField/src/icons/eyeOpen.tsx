import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
export const EyeOpen = (props: any) => (
  <Svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' {...props}>
    <G clipPath='url(#a)'>
      <Path
        fill='#151515'
        d='M9.994 3.75c-4.716 0-8.872 3.27-9.974 7.553a.625.625 0 0 0 1.21.31C2.18 7.924 5.86 5 9.995 5c4.134 0 7.826 2.924 8.776 6.614a.626.626 0 0 0 1.21-.311C18.879 7.018 14.71 3.75 9.995 3.75Zm.007 3.333a4.036 4.036 0 0 0-4.027 4.027 4.037 4.037 0 0 0 4.027 4.027 4.037 4.037 0 0 0 4.027-4.027 4.037 4.037 0 0 0-4.027-4.027Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h20v20H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
