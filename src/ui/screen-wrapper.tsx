import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '../store/use-theme';

export default function ScreenWrapper({ children }: { children?: ReactNode }) {

    const theme = useTheme(state => state.theme)

    return (
        <View style={[styles.container , {backgroundColor: theme.surface}]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        paddingBottom: 120,
    }
})