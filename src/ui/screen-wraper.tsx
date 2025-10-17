import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../theme/colors'

export default function ScreenWraper({ children }: { children?: ReactNode }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surface,
        padding: 20
    }
})