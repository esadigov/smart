import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ProfileEditIcon = ({ color = '#353535', ...props }) => (
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

export const ProfileHomeIcon = ({ color = '#082A54', ...props }) => (
  <Svg
    width={73}
    height={89}
    viewBox="0 0 73 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M101.221 48.3864L57.4487 4.63718L54.5147 1.70319C53.8462 1.0391 52.9421 0.666382 51.9998 0.666382C51.0576 0.666382 50.1535 1.0391 49.485 1.70319L2.77914 48.3864C2.09414 49.0687 1.55278 49.8814 1.187 50.7764C0.821222 51.6713 0.638445 52.6305 0.649456 53.5973C0.694769 57.5848 4.01391 60.768 8.00141 60.768H12.8159V97.6637H91.1838V60.768H96.1002C98.0373 60.768 99.8612 60.009 101.232 58.6383C101.907 57.9656 102.442 57.1656 102.805 56.2848C103.169 55.4039 103.354 54.4597 103.35 53.5067C103.35 51.5809 102.591 49.7571 101.221 48.3864V48.3864ZM58.3436 89.5075H45.6561V66.3981H58.3436V89.5075ZM83.0276 52.6118V89.5075H65.5936V63.6794C65.5936 61.1758 63.5659 59.1481 61.0623 59.1481H42.9373C40.4338 59.1481 38.4061 61.1758 38.4061 63.6794V89.5075H20.9721V52.6118H10.0971L52.0112 10.7317L54.628 13.3485L93.9139 52.6118H83.0276Z"
      fill={color}
    />
  </Svg>
);

export const ProfileLogsIcon = ({ color = '#0F5450', ...props }) => (
  <Svg
    width={79}
    height={98}
    viewBox="0 0 79 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M93.1625 33.7125L67.7875 8.3375C67.0625 7.6125 66.3375 7.25 65.25 7.25H29C25.0125 7.25 21.75 10.5125 21.75 14.5V101.5C21.75 105.488 25.0125 108.75 29 108.75H87C90.9875 108.75 94.25 105.488 94.25 101.5V36.25C94.25 35.1625 93.8875 34.4375 93.1625 33.7125ZM65.25 15.95L85.55 36.25H65.25V15.95ZM87 101.5H29V14.5H58V36.25C58 40.2375 61.2625 43.5 65.25 43.5H87V101.5Z"
      fill={color}
    />
    <Path
      d="M36.25 79.75H79.75V87H36.25V79.75ZM36.25 58H79.75V65.25H36.25V58Z"
      fill={color}
    />
  </Svg>
);

export const ProfileUsersIcon = ({ color = '#136A36', ...props }) => (
  <Svg
    width={65}
    height={83}
    viewBox="0 0 65 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M78.2217 70.0273C76.1953 65.2274 73.2546 60.8675 69.5635 57.1904C65.8836 53.5027 61.5244 50.5625 56.7266 48.5322C56.6836 48.5107 56.6406 48.5 56.5977 48.4785C63.2901 43.6445 67.6406 35.7705 67.6406 26.8867C67.6406 12.1699 55.7168 0.246094 41 0.246094C26.2832 0.246094 14.3594 12.1699 14.3594 26.8867C14.3594 35.7705 18.71 43.6445 25.4024 48.4893C25.3594 48.5107 25.3164 48.5215 25.2735 48.543C20.461 50.5732 16.1426 53.4844 12.4365 57.2012C8.74886 60.8811 5.80867 65.2403 3.77834 70.0381C1.78376 74.7351 0.708033 79.771 0.609399 84.873C0.606532 84.9877 0.626642 85.1018 0.668544 85.2085C0.710446 85.3153 0.773293 85.4126 0.85338 85.4947C0.933468 85.5767 1.02918 85.642 1.13487 85.6865C1.24056 85.731 1.35409 85.7539 1.46877 85.7539H7.91409C8.38674 85.7539 8.76272 85.3779 8.77346 84.916C8.98831 76.623 12.3184 68.8564 18.2051 62.9697C24.2959 56.8789 32.3848 53.5273 41 53.5273C49.6153 53.5273 57.7041 56.8789 63.7949 62.9697C69.6817 68.8564 73.0117 76.623 73.2266 84.916C73.2373 85.3887 73.6133 85.7539 74.086 85.7539H80.5313C80.646 85.7539 80.7595 85.731 80.8652 85.6865C80.9709 85.642 81.0666 85.5767 81.1467 85.4947C81.2268 85.4126 81.2896 85.3153 81.3315 85.2085C81.3734 85.1018 81.3935 84.9877 81.3906 84.873C81.2832 79.7383 80.2197 74.7432 78.2217 70.0273ZM41 45.3633C36.0694 45.3633 31.4287 43.4404 27.9375 39.9492C24.4463 36.458 22.5235 31.8174 22.5235 26.8867C22.5235 21.9561 24.4463 17.3154 27.9375 13.8242C31.4287 10.333 36.0694 8.41016 41 8.41016C45.9307 8.41016 50.5713 10.333 54.0625 13.8242C57.5537 17.3154 59.4766 21.9561 59.4766 26.8867C59.4766 31.8174 57.5537 36.458 54.0625 39.9492C50.5713 43.4404 45.9307 45.3633 41 45.3633Z"
      fill={color}
    />
  </Svg>
);

export const ProfileShieldIcon = ({ color = '#3A6598', ...props }) => (
  <Svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 3.75C0 3.55109 0.0790175 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3C3.413 3 6.008 2.057 8.55 0.15C8.67982 0.0526335 8.83772 0 9 0C9.16228 0 9.32018 0.0526335 9.45 0.15C11.992 2.057 14.587 3 17.25 3C17.4489 3 17.6397 3.07902 17.7803 3.21967C17.921 3.36032 18 3.55109 18 3.75V9C18 14.001 15.042 17.676 9.275 19.948C9.09828 20.0176 8.90172 20.0176 8.725 19.948C2.958 17.676 0 14 0 9V3.75ZM1.5 4.478V9C1.5 13.256 3.953 16.379 9 18.442C14.047 16.379 16.5 13.256 16.5 9V4.478C13.923 4.326 11.42 3.388 9 1.678C6.58 3.388 4.077 4.326 1.5 4.478Z"
      fill={color}
    />
  </Svg>
);

export const ProfileMessageIcon = ({ color = '#3A6598', ...props }) => (
  <Svg
    width={20}
    height={19}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.25 15C2.38805 15 1.5614 14.6576 0.951903 14.0481C0.34241 13.4386 0 12.612 0 11.75V3.25C0 2.38805 0.34241 1.5614 0.951903 0.951903C1.5614 0.34241 2.38805 0 3.25 0H16.75C17.1768 0 17.5994 0.0840637 17.9937 0.247391C18.388 0.410719 18.7463 0.650112 19.0481 0.951903C19.3499 1.25369 19.5893 1.61197 19.7526 2.00628C19.9159 2.40059 20 2.8232 20 3.25V11.75C20 12.1768 19.9159 12.5994 19.7526 12.9937C19.5893 13.388 19.3499 13.7463 19.0481 14.0481C18.7463 14.3499 18.388 14.5893 17.9937 14.7526C17.5994 14.9159 17.1768 15 16.75 15H11.012L6 18.75C5.81428 18.889 5.59356 18.9736 5.36251 18.9943C5.13146 19.015 4.89922 18.971 4.69176 18.8672C4.4843 18.7634 4.30981 18.6039 4.18782 18.4066C4.06582 18.2093 4.00114 17.982 4.001 17.75V15H3.251H3.25ZM10.514 13.5H16.75C17.2141 13.5 17.6592 13.3156 17.9874 12.9874C18.3156 12.6592 18.5 12.2141 18.5 11.75V3.25C18.5 2.78587 18.3156 2.34075 17.9874 2.01256C17.6592 1.68437 17.2141 1.5 16.75 1.5H3.25C2.78587 1.5 2.34075 1.68437 2.01256 2.01256C1.68437 2.34075 1.5 2.78587 1.5 3.25V11.75C1.5 12.716 2.284 13.5 3.25 13.5H5.499V17.25L10.514 13.5Z"
      fill={color}
    />
  </Svg>
);

export const ProfileLogOutIcon = ({ color = '#3A6598', ...props }) => (
  <Svg
    width={19}
    height={18}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.3 18C12.5387 18 12.7676 17.9052 12.9364 17.7364C13.1052 17.5676 13.2 17.3387 13.2 17.1C13.2 16.8613 13.1052 16.6324 12.9364 16.4636C12.7676 16.2948 12.5387 16.2 12.3 16.2H4.79998C4.16346 16.2 3.55301 15.9471 3.10292 15.4971C2.65283 15.047 2.39998 14.4365 2.39998 13.8V4.2C2.39998 3.56348 2.65283 2.95303 3.10292 2.50294C3.55301 2.05286 4.16346 1.8 4.79998 1.8H12.3C12.5387 1.8 12.7676 1.70518 12.9364 1.5364C13.1052 1.36761 13.2 1.13869 13.2 0.9C13.2 0.661305 13.1052 0.432387 12.9364 0.263604C12.7676 0.094821 12.5387 0 12.3 0H4.79998C3.68607 0 2.61778 0.442499 1.83013 1.23015C1.04247 2.0178 0.599976 3.08609 0.599976 4.2V13.8C0.599976 14.9139 1.04247 15.9822 1.83013 16.7698C2.61778 17.5575 3.68607 18 4.79998 18H12.3ZM13.4892 4.4388C13.576 4.35857 13.6778 4.29623 13.7887 4.25534C13.8996 4.21446 14.0175 4.19582 14.1356 4.2005C14.2537 4.20518 14.3698 4.23309 14.4771 4.28262C14.5844 4.33216 14.681 4.40235 14.7612 4.4892L18.3612 8.3892C18.5148 8.55549 18.6002 8.77359 18.6002 9C18.6002 9.22641 18.5148 9.44451 18.3612 9.6108L14.7612 13.5108C14.599 13.686 14.3739 13.7896 14.1354 13.7988C13.8968 13.8081 13.6644 13.7222 13.4892 13.56C13.314 13.3978 13.2104 13.1727 13.2011 12.9342C13.1919 12.6956 13.2778 12.4632 13.44 12.288L15.6456 9.8988H6.29998C6.06128 9.8988 5.83236 9.80398 5.66358 9.6352C5.4948 9.46641 5.39998 9.23749 5.39998 8.9988C5.39998 8.76011 5.4948 8.53119 5.66358 8.3624C5.83236 8.19362 6.06128 8.0988 6.29998 8.0988H15.6444L13.4388 5.7096C13.3585 5.62278 13.2962 5.521 13.2553 5.41009C13.2144 5.29917 13.1958 5.18128 13.2005 5.06316C13.2052 4.94504 13.2331 4.829 13.2826 4.72166C13.3321 4.61433 13.4023 4.5178 13.4892 4.4376V4.4388Z"
      fill={color}
    />
  </Svg>
);

export const HomeIconMini = ({ color = '#3A6598', ...props }) => (
  <Svg
    width={22}
    height={21}
    viewBox="0 0 22 21"
    fill="none"
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <Path
      d="M21.1836 9.87304L12.1273 0.821482L11.5203 0.214451C11.382 0.0770525 11.1949 -6.10352e-05 11 -6.10352e-05C10.805 -6.10352e-05 10.618 0.0770525 10.4797 0.214451L0.816393 9.87304C0.67467 10.0142 0.562663 10.1823 0.486984 10.3675C0.411306 10.5527 0.37349 10.7511 0.375769 10.9512C0.385144 11.7762 1.07186 12.4348 1.89686 12.4348H2.89296V20.0684H19.107V12.4348H20.1242C20.525 12.4348 20.9023 12.2777 21.1859 11.9941C21.3256 11.8549 21.4362 11.6894 21.5114 11.5072C21.5867 11.3249 21.625 11.1296 21.6242 10.9324C21.6242 10.534 21.4672 10.1566 21.1836 9.87304ZM12.3125 18.3809H9.68749V13.5996H12.3125V18.3809ZM17.4195 10.7473V18.3809H13.8125V13.0371C13.8125 12.5191 13.393 12.0996 12.875 12.0996H9.12499C8.60702 12.0996 8.18749 12.5191 8.18749 13.0371V18.3809H4.58046L4.58046 10.7473H2.33046L11.0023 2.08242L11.5437 2.62383L19.6719 10.7473H17.4195Z"
      fill={color}
    />
  </Svg>
);

export const RingbellIcon = ({ color = '#3A6598', ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <Path
      d="M12 1.99601C13.9466 1.99345 15.8177 2.74885 17.217 4.10217C18.6162 5.45548 19.4336 7.30039 19.496 9.24601L19.5 9.49601V13.593L20.88 16.749C20.9632 16.9392 20.9978 17.1471 20.9805 17.354C20.9633 17.5608 20.8947 17.7601 20.781 17.9338C20.6674 18.1076 20.5122 18.2502 20.3296 18.3489C20.1469 18.4476 19.9426 18.4992 19.735 18.499L15 18.502C15.001 19.283 14.6974 20.0336 14.1537 20.5943C13.6101 21.155 12.8692 21.4816 12.0885 21.5046C11.3079 21.5277 10.549 21.2454 9.97319 20.7177C9.39738 20.1901 9.05004 19.4587 9.00498 18.679L8.99998 18.499H4.27498C4.06779 18.4988 3.86391 18.4471 3.68164 18.3486C3.49936 18.25 3.34441 18.1078 3.2307 17.9346C3.11699 17.7614 3.04807 17.5627 3.03014 17.3563C3.01222 17.1499 3.04583 16.9422 3.12798 16.752L4.49998 13.594V9.49601C4.49998 5.34101 7.85198 1.99601 12 1.99601ZM13.5 18.5L10.5 18.502C10.4999 18.8873 10.6481 19.2579 10.9139 19.5369C11.1796 19.8158 11.5425 19.9819 11.9274 20.0005C12.3122 20.0192 12.6895 19.889 12.981 19.637C13.2725 19.385 13.4558 19.0305 13.493 18.647L13.5 18.5ZM12 3.49601C8.67998 3.49601 5.99998 6.17001 5.99998 9.49601V13.906L4.65598 17H19.353L18 13.907V9.50901L17.997 9.28401C17.945 7.72925 17.2901 6.25574 16.1707 5.17543C15.0514 4.09511 13.5556 3.4928 12 3.49601Z"
      fill={color}
    />
  </Svg>
);