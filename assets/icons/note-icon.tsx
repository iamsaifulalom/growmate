import React from 'react';
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './home-icon';

export default function NoteIcon({ color = "white" }: IconProps) {
    return (
        <Svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            color={color}
        >
            <Path
                d="M23.3333 18.6666V9.33331C23.3333 6.03398 23.3333 4.38315 22.3078 3.35881C21.2835 2.33331 19.6326 2.33331 16.3333 2.33331H11.6666C8.36729 2.33331 6.71646 2.33331 5.69213 3.35881C4.66663 4.38315 4.66663 6.03398 4.66663 9.33331V18.6666C4.66663 21.966 4.66663 23.6168 5.69213 24.6411C6.71646 25.6666 8.36729 25.6666 11.6666 25.6666H16.3333C19.6326 25.6666 21.2835 25.6666 22.3078 24.6411C23.3333 23.6168 23.3333 21.966 23.3333 18.6666Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.33325 17.5H13.9999M9.33325 12.8333H18.6666M18.0833 2.33331H9.91659C9.91659 3.98298 9.91658 4.80781 10.4299 5.31998C10.9421 5.83331 11.7669 5.83331 13.4166 5.83331H14.5833C16.2329 5.83331 17.0578 5.83331 17.5699 5.31998C18.0833 4.80781 18.0833 3.98298 18.0833 2.33331Z"
                stroke="currentColor"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}