import { Text, TextInput } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import HeaderWrapper from '@/src/ui/header-wrapper'
import IconWrapper from '@/src/ui/icon-wrapper'
import LeftArrowIcon from '@/assets/icons/left-arrow-icon'
import { useRouter } from 'expo-router'
import { colors } from '@/src/theme/colors'

export default function Search() {
    const { back } = useRouter()
    return (
        <ScreenWrapper>
            <HeaderWrapper>
                <IconWrapper onPress={() => back()}>
                    <LeftArrowIcon />
                </IconWrapper>
                <TextInput
                    selectionColor={colors.primary}
                    autoFocus={true}
                    placeholder='Search ...'
                    placeholderTextColor={colors.muted}
                    multiline={false}
                    style={{
                        paddingHorizontal: 16,
                        borderRadius: 24,
                        borderColor: colors.text,
                        backgroundColor: colors.surface,
                        marginLeft: 10,
                        flex: 1,
                        color: colors.text,
                        borderWidth: 1.5,
                        height: 45,
                        fontFamily: "space-grotesk-bold"
                    }}
                />
            </HeaderWrapper>
        </ScreenWrapper>
    )
}