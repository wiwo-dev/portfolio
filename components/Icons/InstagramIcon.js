import React from "react";

export default function InstagramIcon({ size = 16, color = "black" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_452_479)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.97675 0.710992C5.75875 0.674992 6.00808 0.666992 8.00008 0.666992C9.99208 0.666992 10.2414 0.675659 11.0227 0.710992C11.8041 0.746326 12.3374 0.870992 12.8041 1.05166C13.2927 1.23633 13.7361 1.52499 14.1027 1.89833C14.4761 2.26433 14.7641 2.70699 14.9481 3.19633C15.1294 3.66299 15.2534 4.19633 15.2894 4.97633C15.3254 5.75966 15.3334 6.00899 15.3334 8.00033C15.3334 9.99233 15.3247 10.2417 15.2894 11.0237C15.2541 11.8037 15.1294 12.337 14.9481 12.8037C14.7641 13.2931 14.4756 13.7365 14.1027 14.103C13.7361 14.4763 13.2927 14.7643 12.8041 14.9483C12.3374 15.1297 11.8041 15.2537 11.0241 15.2897C10.2414 15.3257 9.99208 15.3337 8.00008 15.3337C6.00808 15.3337 5.75875 15.325 4.97675 15.2897C4.19675 15.2543 3.66341 15.1297 3.19675 14.9483C2.70736 14.7643 2.26396 14.4758 1.89741 14.103C1.52433 13.7368 1.23562 13.2936 1.05141 12.8043C0.870748 12.3377 0.746748 11.8043 0.710748 11.0243C0.674748 10.241 0.666748 9.99166 0.666748 8.00033C0.666748 6.00833 0.675415 5.75899 0.710748 4.97766C0.746081 4.19633 0.870748 3.66299 1.05141 3.19633C1.2359 2.70705 1.52483 2.26387 1.89808 1.89766C2.26411 1.52466 2.70706 1.23595 3.19608 1.05166C3.66275 0.870992 4.19608 0.746992 4.97608 0.710992H4.97675ZM10.9634 2.03099C10.1901 1.99566 9.95808 1.98833 8.00008 1.98833C6.04208 1.98833 5.81008 1.99566 5.03675 2.03099C4.32141 2.06366 3.93341 2.18299 3.67475 2.28366C3.33275 2.41699 3.08808 2.57499 2.83141 2.83166C2.58811 3.06836 2.40087 3.35651 2.28341 3.67499C2.18275 3.93366 2.06341 4.32166 2.03075 5.03699C1.99541 5.81033 1.98808 6.04233 1.98808 8.00033C1.98808 9.95833 1.99541 10.1903 2.03075 10.9637C2.06341 11.679 2.18275 12.067 2.28341 12.3257C2.40075 12.6437 2.58808 12.9323 2.83141 13.169C3.06808 13.4123 3.35675 13.5997 3.67475 13.717C3.93341 13.8177 4.32141 13.937 5.03675 13.9697C5.81008 14.005 6.04141 14.0123 8.00008 14.0123C9.95875 14.0123 10.1901 14.005 10.9634 13.9697C11.6787 13.937 12.0667 13.8177 12.3254 13.717C12.6674 13.5837 12.9121 13.4257 13.1687 13.169C13.4121 12.9323 13.5994 12.6437 13.7167 12.3257C13.8174 12.067 13.9367 11.679 13.9694 10.9637C14.0047 10.1903 14.0121 9.95833 14.0121 8.00033C14.0121 6.04233 14.0047 5.81033 13.9694 5.03699C13.9367 4.32166 13.8174 3.93366 13.7167 3.67499C13.5834 3.33299 13.4254 3.08833 13.1687 2.83166C12.932 2.58837 12.6439 2.40113 12.3254 2.28366C12.0667 2.18299 11.6787 2.06366 10.9634 2.03099V2.03099ZM7.06342 10.261C7.58652 10.4787 8.169 10.5081 8.71137 10.3441C9.25373 10.1801 9.72234 9.83294 10.0372 9.36182C10.352 8.89071 10.4935 8.32491 10.4374 7.76106C10.3814 7.19722 10.1314 6.67031 9.73008 6.27033C9.47424 6.01464 9.16489 5.81887 8.8243 5.69709C8.48372 5.57531 8.12037 5.53057 7.76041 5.56607C7.40046 5.60157 7.05285 5.71644 6.74262 5.90241C6.43238 6.08838 6.16724 6.34082 5.96628 6.64156C5.76532 6.9423 5.63354 7.28385 5.58043 7.64163C5.52731 7.99941 5.55418 8.36452 5.65911 8.71067C5.76403 9.05682 5.9444 9.3754 6.18723 9.64347C6.43005 9.91155 6.7293 10.1224 7.06342 10.261ZM5.33475 5.33499C5.68476 4.98498 6.10029 4.70733 6.55761 4.5179C7.01493 4.32847 7.50508 4.23097 8.00008 4.23097C8.49508 4.23097 8.98523 4.32847 9.44255 4.5179C9.89987 4.70733 10.3154 4.98498 10.6654 5.33499C11.0154 5.68501 11.2931 6.10054 11.4825 6.55786C11.6719 7.01518 11.7694 7.50533 11.7694 8.00033C11.7694 8.49532 11.6719 8.98548 11.4825 9.44279C11.2931 9.90011 11.0154 10.3156 10.6654 10.6657C9.95852 11.3725 8.99978 11.7697 8.00008 11.7697C7.00039 11.7697 6.04164 11.3725 5.33475 10.6657C4.62786 9.95877 4.23073 9.00002 4.23073 8.00033C4.23073 7.00063 4.62786 6.04188 5.33475 5.33499V5.33499ZM12.6054 4.79233C12.6922 4.71051 12.7616 4.61211 12.8096 4.50297C12.8576 4.39384 12.8833 4.27617 12.885 4.15695C12.8868 4.03772 12.8646 3.91936 12.8197 3.80887C12.7749 3.69837 12.7084 3.598 12.6241 3.51368C12.5397 3.42937 12.4394 3.36283 12.3289 3.318C12.2184 3.27318 12.1 3.25098 11.9808 3.25271C11.8616 3.25445 11.7439 3.28009 11.6348 3.32812C11.5256 3.37615 11.4272 3.44559 11.3454 3.53233C11.1863 3.70101 11.0992 3.92507 11.1025 4.15695C11.1059 4.38882 11.1995 4.61024 11.3635 4.77422C11.5275 4.9382 11.7489 5.03181 11.9808 5.03519C12.2127 5.03857 12.4367 4.95145 12.6054 4.79233V4.79233Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_452_479">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}