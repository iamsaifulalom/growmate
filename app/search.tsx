import { Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import HeaderWrapper from '@/src/ui/header-wrapper'

export default function Search() {
    return (
        <ScreenWrapper>
            <HeaderWrapper>
                <Text>Back</Text>
                <Text style={{ flex: 1, backgroundColor: "red" }}>Search</Text>
            </HeaderWrapper>
        </ScreenWrapper>
    )
}