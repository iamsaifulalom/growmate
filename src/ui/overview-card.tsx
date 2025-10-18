import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export default function OverviewCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>OverviewCar</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        height: 140,
        backgroundColor: colors.primary,
        width: "100%",
        borderRadius : 24,
        padding: 16
    },
    title: {
        color: colors.text,
        fontSize: 40,
        fontFamily: "sand"
    }
})