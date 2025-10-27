import { TouchableOpacity, StyleSheet } from 'react-native'
import { tabIcons } from '../constants/tab-icons';
import { useTheme } from '../store/use-theme';

export default function Tab({ isFocusd, onPress, routeName }: TabProps) {

    const theme = useTheme(state => state.theme);
    const backgroundColor = isFocusd ? theme.text : "transparent";
    const iconColor = isFocusd ? theme.background : theme.muted;

    // access icon properties from tabicons object 
    // with routename as key
    const { Icon } = tabIcons[routeName]

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.tab, { backgroundColor }]}
        >
            <Icon color={iconColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        height: 45,
        width: 65,
        // borderTopWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    }
})

interface TabProps {
    isFocusd: boolean,
    routeName: string,
    onPress: () => void,

}