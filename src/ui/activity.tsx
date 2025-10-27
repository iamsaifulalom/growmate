import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../store/use-theme'

export default function Activity() {
    const theme = useTheme(state => state.theme)
    return (
        <View style={[styles.container , {backgroundColor: theme.accents}]}>
            <Text>Activity</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 140,
        borderRadius: 24,
        padding: 16,
        flex: 1,
    }
})