import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

export default function OverviewCard({
    backgroundColor = colors.background,
    title
}: OverviewCardProps) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>{title}</Text>
                <Text style={[styles.paragraph, { fontFamily: "space-grotesk-bold" }]}>20% </Text>
            </View>
            <Text style={styles.title}>40</Text>
            <View style={[
                styles.paragraphContainer,
                { justifyContent: "space-between" }
            ]}>
                <Text style={styles.paragraph}>vs. last week</Text>
                <Text style={
                    [styles.paragraph,
                    { fontFamily: "space-grotesk-bold" }
                    ]}>
                    20
                </Text>
            </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    card: {
        height: 140,
        width: "100%",
        borderRadius: 24,
        padding: 16,
        elevation: 1
    },
    title: {
        color: colors.text,
        fontSize: 40,
        fontFamily: "space-grotesk-bold"
    },
    paragraph: {
        color: colors.text,
        fontSize: 16,
        fontFamily: "poppins-regular"
    },
    paragraphContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 20
    }
})


interface OverviewCardProps {
    backgroundColor?: string,
    title?: string
}