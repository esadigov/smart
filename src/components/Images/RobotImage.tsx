import * as React from 'react';
import Svg, {
  Path,
  Rect,
  G,
  Defs,
  Pattern,
  ClipPath,
  Use,
  Image
} from 'react-native-svg';

const RobotImage = ({ ...props }) => (
  <Svg
    width={320}
    height={320}
    viewBox='0 0 283 287'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <Rect width={320} height={320} fill='#1E1E1E' />
    <Path
      d='M-553 -1179C-553 -1180.1 -552.105 -1181 -551 -1181H6759C6760.1 -1181 6761 -1180.1 6761 -1179V1274C6761 1275.1 6760.1 1276 6759 1276H-551C-552.104 1276 -553 1275.1 -553 1274V-1179Z'
      fill='#404040'
    />
    <G clip-path='url(#clip0_1_1003)'>
      <Rect
        width='375'
        height='812'
        transform='translate(-44 -206)'
        fill='white'
      />
      <Rect x='16' y='16' width={256} height={256} fill='url(#pattern0)' />
      <G style='mix-blend-mode:hue'>
        <Rect width={283} height={287} fill='white' />
        <Image
          id='image0_1_1003'
          width={283}
          height={287}
          xlinkHref={require('./RobotWave.png')}
        />
      </G>
    </G>
    <Path
      d='M-551 -1180H6759V-1182H-551V-1180ZM6760 -1179V1274H6762V-1179H6760ZM6759 1275H-551V1277H6759V1275ZM-552 1274V-1179H-554V1274H-552ZM-551 1275C-551.552 1275 -552 1274.55 -552 1274H-554C-554 1275.66 -552.657 1277 -551 1277V1275ZM6760 1274C6760 1274.55 6759.55 1275 6759 1275V1277C6760.66 1277 6762 1275.66 6762 1274H6760ZM6759 -1180C6759.55 -1180 6760 -1179.55 6760 -1179H6762C6762 -1180.66 6760.66 -1182 6759 -1182V-1180ZM-551 -1182C-552.657 -1182 -554 -1180.66 -554 -1179H-552C-552 -1179.55 -551.552 -1180 -551 -1180V-1182Z'
      fill='white'
      fill-opacity='0.1'
    />
    <Defs>
      <Pattern
        id='pattern0'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <Use xlinkHref='#image0_1_1003' transform='scale(0.0015625)' />
      </Pattern>
      <ClipPath id='clip0_1_1003'>
        <Rect
          width={375}
          height={812}
          fill='white'
          transform='translate(-44 -206)'
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RobotImage;
