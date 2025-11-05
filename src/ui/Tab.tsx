import { TouchableOpacity, StyleSheet } from 'react-native'
import { tabIcons } from '../constants/tab-icons';
import { useTheme } from '../store/use-theme';

export default function Tab({ isFocusd, onPress, routeName }: TabProps) {

    const theme = useTheme(state => state.theme);
    const backgroundColor = isFocusd ? theme.text : "transparent";
    const iconColor = isFocusd ? theme.foreground : theme.muted;

    // access icon properties from tabicons object 
    // with routename as key
    const { Icon } = tabIcons[routeName]

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.tab, { borderColor : backgroundColor }]}
        >
            <Icon color={iconColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        width: 60,
        height: 60,
        borderTopWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        // paddingBottom : 16,
        // paddingTop : 8,
    }
})

interface TabProps {
    isFocusd: boolean,
    routeName: string,
    onPress: () => void,

}