import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileEditIcon = ({ color = '#353535', ...props }) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.968 1.032C12.5206 0.584678 11.9139 0.333374 11.2813 0.333374C10.6487 0.333374 10.042 0.584678 9.59464 1.032L1.62664 9C1.35573 9.27101 1.16533 9.61188 1.07664 9.98467L0.346639 13.052C0.326874 13.1351 0.328727 13.2219 0.352022 13.3041C0.375317 13.3862 0.419278 13.4611 0.479711 13.5215C0.540145 13.5818 0.615035 13.6257 0.697242 13.6489C0.779448 13.6721 0.866228 13.6739 0.949306 13.654L4.01664 12.9233C4.38943 12.8346 4.7303 12.6442 5.00131 12.3733L12.968 4.40534C13.4153 3.958 13.6666 3.35129 13.6666 2.71867C13.6666 2.08605 13.4153 1.47934 12.968 1.032ZM10.3013 1.73867C10.43 1.60997 10.5828 1.50789 10.7509 1.43824C10.9191 1.36859 11.0993 1.33274 11.2813 1.33274C11.4633 1.33274 11.6435 1.36859 11.8117 1.43824C11.9798 1.50789 12.1326 1.60997 12.2613 1.73867C12.39 1.86737 12.4921 2.02015 12.5617 2.1883C12.6314 2.35645 12.6672 2.53667 12.6672 2.71867C12.6672 2.90067 12.6314 3.08089 12.5617 3.24904C12.4921 3.41719 12.39 3.56997 12.2613 3.69867L11.6666 4.29267L9.70664 2.33334L10.3013 1.74V1.73867ZM8.99997 3.04134L10.96 5L4.29331 11.6667C4.15331 11.8067 3.97731 11.9047 3.78464 11.9507L1.50731 12.4927L2.04931 10.2153C2.09531 10.0233 2.19397 9.84667 2.33397 9.70667L8.99997 3.04V3.04134Z"
      fill={color}
    />
  </Svg>
);

export default ProfileEditIcon;