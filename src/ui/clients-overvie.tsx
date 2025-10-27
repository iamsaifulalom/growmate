import { View, StyleSheet } from 'react-native'
import React from 'react'
import OverviewCard from './overview-card'
import { useTheme } from '../store/use-theme'

export default function ClientsOverview() {
    const theme = useTheme(state => state.theme)
    return (
        <View style={[styles.container]}>
            <OverviewCard backgroundColor={theme.secondary} />
            <View style={styles.innerContainer}>
                <OverviewCard backgroundColor={theme.primary} />
                <OverviewCard backgroundColor={theme.card} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        overflow: "hidden"
    },
    innerContainer: {
        flexDirection: "column",
        gap: 6,
        overflow: "hidden",
        flex: 1
    }
})