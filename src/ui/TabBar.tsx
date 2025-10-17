import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/colors';
import Tab from './Tab';

export default function TabBar({ state, navigation }: BottomTabBarProps) {

    const routes = state.routeNames;

    return (
        <View style={[styles.tabBar]}>
            {routes.map((routeName, i) => {

                const isFocused = state.index === i;
                return (
                    <Tab
                        key={i}
                        onPress={() => navigation.navigate(routeName)}
                        routeName={routeName}
                        isFocusd={isFocused}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.text,
        borderRadius: 50,
        padding: 10,
        gap: 8
    }
})