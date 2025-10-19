import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../theme/colors';

export default function ScreenWrapper({ children }: { children?: ReactNode }) {
    
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        minHeight: "100%",
        paddingBottom: 120,
    }
})