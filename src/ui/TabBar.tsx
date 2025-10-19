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
        bottom: 0,
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.background,
        // borderRadius: 50,
        left: 0,
        right: 0,
        paddingBottom : 4,
        paddingHorizontal : 20
    }
})