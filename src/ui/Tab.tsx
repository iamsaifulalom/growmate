import { TouchableOpacity, StyleSheet } from 'react-native'
import { tabIcons } from '../constants/tab-icons';
import { useTheme } from '../store/use-theme';

export default function Tab({ isFocusd, onPress, routeName }: TabProps) {

    const theme = useTheme(state => state.theme);

    const borderTopColor = isFocusd ? theme.text : "transparent";
    const iconColor = isFocusd ? theme.text : theme.muted;

    // access icon properties from tabicons object 
    // with routename as key
    const { Icon } = tabIcons[routeName]

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.tab, { borderTopColor }]}
        >
            <Icon color={iconColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        height: 60,
        width: 60,
        borderTopWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    }
})

interface TabProps {
    isFocusd: boolean,
    routeName: string,
    onPress: () => void,

}