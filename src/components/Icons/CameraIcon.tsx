import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

const CameraIcon = () => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      width={14}
      height={14}
      rx={7}
      fill='#ECB3B3'
    />
    <Rect
      x={2}
      y={2}
      width={10}
      height={10}
      rx={5}
      fill='#A92929'
    />
  </Svg>
);

export default CameraIcon;
