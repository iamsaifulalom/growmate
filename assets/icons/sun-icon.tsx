import React from 'react'
import { IconProps } from './home-icon';
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@/src/store/use-theme';

export default function SunIcon({ color }: IconProps): React.ReactElement {

    const theme = useTheme(state => state.theme)

    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 22 22"
            fill="none"
            color={color || theme.text}
        >
            <Path
                d="M11 1V2M11 20V21M21 11H20M2 11H1M18.07 3.93L17.678 4.323M4.322 17.678L3.929 18.071M18.07 18.07L17.678 17.677M4.322 4.322L3.929 3.929M5.341 9C4.88777 10.2831 4.88415 11.6821 5.33073 12.9675C5.77732 14.2529 6.64758 15.3484 7.79871 16.074C8.94984 16.7997 10.3135 17.1125 11.6658 16.9612C13.0181 16.8098 14.2788 16.2033 15.2411 15.2411C16.2033 14.2788 16.8098 13.0181 16.9612 11.6658C17.1125 10.3135 16.7997 8.94984 16.074 7.79871C15.3484 6.64758 14.2529 5.77732 12.9675 5.33073C11.6821 4.88415 10.2831 4.88777 9 5.341"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Svg>
    )
}