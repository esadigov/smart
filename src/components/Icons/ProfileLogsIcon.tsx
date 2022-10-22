import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileHomeIcon = ({ ...props }) => (
  <Svg
    width={79}
    height={98}
    viewBox="0 0 79 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M93.1625 33.7125L67.7875 8.3375C67.0625 7.6125 66.3375 7.25 65.25 7.25H29C25.0125 7.25 21.75 10.5125 21.75 14.5V101.5C21.75 105.488 25.0125 108.75 29 108.75H87C90.9875 108.75 94.25 105.488 94.25 101.5V36.25C94.25 35.1625 93.8875 34.4375 93.1625 33.7125ZM65.25 15.95L85.55 36.25H65.25V15.95ZM87 101.5H29V14.5H58V36.25C58 40.2375 61.2625 43.5 65.25 43.5H87V101.5Z"
      fill="#0F5450"
    />
    <Path
      d="M36.25 79.75H79.75V87H36.25V79.75ZM36.25 58H79.75V65.25H36.25V58Z"
      fill="#0F5450"
    />
  </Svg>
);

export default ProfileHomeIcon;
