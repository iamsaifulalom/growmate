import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../store/use-theme'
import { H1, P } from './Elements'

export default function OverviewCard({ title = "Title" , backgroundColor }: OverviewCardProps) {

    const theme = useTheme(state => state.theme)

    return (
        <View style={[styles.card, { backgroundColor: backgroundColor || theme.background }]}>
            <View style={styles.paragraphContainer}>
                <P style={{ fontWeight: "bold" }}>{title}</P>
                <P style={{ fontFamily: "space-grotesk-bold" }}>20% </P>
            </View>
            <H1>40</H1>
            {/* <View style={[styles.paragraphContainer, { justifyContent: "space-between" }]}>
                <P>vs. last week</P>
                <P style={{ fontFamily: "space-grotesk-bold" }}>20</P>
            </View> */}
        </View>
    )
}


export const styles = StyleSheet.create({
    card: {
        minHeight: 140,
        borderRadius: 24,
        padding: 16,
        flex: 1,
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