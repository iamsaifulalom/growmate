import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../theme/colors'

export default function HeaderWrapper({ children }: { children: ReactNode }) {
    return (
        <View style={styles.header}>
            {children}
        </View>

    )
}

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        height: 60
    },
})