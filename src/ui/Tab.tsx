import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../theme/colors'

export default function Tab({ isFocusd, onPress }: TabProps) {

    const backgroundColor = isFocusd ? colors.primary : "transparent";

    return (
        <View style={[styles.tab, { backgroundColor }]}>
            <Text onPress={onPress}>Tab</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        height: 60,
        width: 60,
        borderRadius: 500,
        justifyContent: "center",
        alignItems: "center"
    }
})

interface TabProps {
    isFocusd: boolean,
    routeName: string,
    onPress: () => void
}